const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function runCommand(command) {
  try {
    console.log(`Executing command: ${command}`);
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Command execution failed: ${command}`);
    console.error(error);
    process.exit(1);
  }
}

function getPnpmVersion() {
  try {
    const version = execSync('pnpm --version', { encoding: 'utf8' }).trim();
    const [major] = version.split('.');
    return parseInt(major, 10);
  } catch (error) {
    console.error('Failed to get pnpm version. Please make sure pnpm is installed.');
    process.exit(1);
  }
}

function checkPnpmVersion() {
  const majorVersion = getPnpmVersion();
  if (majorVersion < 9) {
    console.error('\nError: Your pnpm version is too old.');
    console.error('The cache clean command requires pnpm 9.0 or above.');
    console.error('Please upgrade pnpm using one of these commands:');
    console.error(' pnpm self-update  or  npm install -g pnpm@latest');
    console.error('  corepack prepare pnpm@latest --activate\n');
    process.exit(1);
  }
  return true;
}

function getPackageVersions() {
  const pkgPath = path.join(process.cwd(), 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  return {
    dependencies: pkg.dependencies || {},
    devDependencies: pkg.devDependencies || {}
  };
}

function getNeuxnetPackages() {
  const versions = getPackageVersions();
  const allDeps = { ...versions.dependencies, ...versions.devDependencies };
  
  const neuxnetPackages = Object.keys(allDeps).filter(pkg => pkg.startsWith('@neuxnet/'));
  
  if (neuxnetPackages.length === 0) {
    console.log('No @neuxnet packages found in package.json');
    process.exit(0);
  }
  
  return neuxnetPackages;
}

// Check pnpm version before starting
checkPnpmVersion();

// Get all @neuxnet packages from package.json
const dependencies = getNeuxnetPackages();
console.log('Starting upgrade process...');
console.log(`Found ${dependencies.length} @neuxnet packages to update.\n`);

// Record current versions
console.log('1. Current package versions:');
const beforeVersions = getPackageVersions();
dependencies.forEach(pkg => {
  const version = beforeVersions.dependencies[pkg] || beforeVersions.devDependencies[pkg] || 'not installed';
  console.log(`${pkg}: ${version}`);
});

// Clear package caches
console.log('\n2. Clearing package caches...');
dependencies.forEach(pkg => {
  console.log(`Clearing cache for ${pkg}...`);
  runCommand(`pnpm cache delete ${pkg}`);
});

// Update specified packages to latest version
console.log('\n3. Updating packages...');
runCommand(`pnpm update ${dependencies.join(' ')} --latest`);

// Show version changes
console.log('\n4. Updated package versions:');
const afterVersions = getPackageVersions();
dependencies.forEach(pkg => {
  const beforeVersion = beforeVersions.dependencies[pkg] || beforeVersions.devDependencies[pkg] || 'not installed';
  const afterVersion = afterVersions.dependencies[pkg] || afterVersions.devDependencies[pkg] || 'not installed';
  const changed = beforeVersion !== afterVersion ? '(updated)' : '(no change)';
  console.log(`${pkg}: ${beforeVersion} -> ${afterVersion} ${changed}`);
});

console.log('\n✨ Upgrade completed!');