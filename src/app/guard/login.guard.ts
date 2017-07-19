import {CanActivate} from '@angular/router';
/**
 * Created by Administrator on 2017/6/30.
 */

/*
* 定义一个 LoginGuard 类用来实现 CanActivate 接口
* */
export class LoginGuard implements CanActivate {

  canActivate() {
    /*
    * 声明一个变量 loggedIn，为boolean 类型
    * 产生一个随机数，同 0.5 比较，如果随机数小于 0.5,loggedIn的值为 true，反之为 false.
    * 当随机数大于 0.5 时，控制台打印"用户未登录"，否则返回 loggedIn 变量
    * */
    let loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log('用户未登录！');
    }
    return loggedIn;
  }

}
