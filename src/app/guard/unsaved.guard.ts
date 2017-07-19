import {CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';
/**
 * Created by Administrator on 2017/6/30.
 */
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    /*
    * 当用户点击确定按钮时，将会离开 ProductComponent 组件，否则(点击取消)将停留在该组件
    * */
    return window.confirm('您还没保存，确定要离开吗？');
  }

}
