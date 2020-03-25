# CHANGELOG
## 1.0.3 (2020-03-25)
### Features
- `$NMessage`, `$NNotification`, `$NConfirm` 的获取到的主题会应用到他们的内部组件

### Fixes
- 多个 naive-ui 共存时定位元素会产生冲突
- `n-form-item` 的 validate 方法在某些 validator 的返回值下不会 resolve
- `$NConfirm` 主题未随 `n-config-provider` 切换

## 1.0.2 (2020-03-23)
### Fixes
- `n-transfer` 的选项在值变化之后没有重置
- `n-nimbus-service-layout` (deprecated) 没有兼容 Vue Router(3.1版本以下) `push` 方法的返回值

## 1.0.1 (2020-03-21)
### Features
- `n-layout-sider` 的 `show-trigger` 增加了 `'bar'` & `'arrow-circle'` 选项
### Fixes
- `n-scrollbar` 的轨道会挡住鼠标事件