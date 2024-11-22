
Precautions:
The folder name must be "locale". If it is changed to something else, the title will not be able to switch multiple languages normally (other contents are still normal).

Since vue-i18n does not support interpolation in the Mini App environment, use t("string",{object}) to replace $t("string",{object}).
For code implementation, refer to formatI18n in index.js.

It is recommended to install the i18n Ally extension.

In the language packs of locale, those starting with "uni." are built-in language packs of the framework, and others are all custom ones.

In the page.json file, the pages title can be configured as a variable. Use %% to represent the variable.

注意事项
文件夹名字必须为 locale,如果改为别的，标题将不能正常切换多语言（其他内容还是正常）。

由于在Mini App 环境中 vue-i18n 不支持插值, 所以使用 t("string",{object}) 替换 $t("string",{object}) 。
代码实现参考index.js内的 formatI18n

建议安装 i18n Ally 拓展

在locale 的语言包内以uni. 开头的是框架内置的语言包，其他都是自定义的。

在page.json内的pages标题可以配置为变量。使用 %% 表示变量。