import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }

  /*
  * 在模板中使用 click 事件响应 toProductDetails() 方法
  * toProductDetails() 方法使用 Router 对象的 navigate 方法设置跳转链接
  * navigate 方法接受一个数组
  * */

  toProductDetails() {
    this.router.navigate(['product' , 3]);
  }

}
