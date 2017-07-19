import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from './chat/chat.component';
import {LoginGuard} from './guard/login.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {ProductResolve} from './guard/product.resolve';

/*
* const 用来声明常量
* 一旦声明，其值就不能改变
* const 一旦声明常量，就应该立即初始化，不能留到以后赋值
* */
const routes: Routes = [
  {
    /*
    * 将主页从定向到 home
    * 路径为空字符串，从定向到 home，pathMatch 匹配策略为 full(意思是整个路由必须为空才去重定向为 home)
    * */
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    /*
    * 路径不能以 "/" 开头，如 path: "/"
    * 因为 angular 的路由器会解析生成 url, 不用 "/" 开头是为了在多个 url 之间导航时，可以自由的使用相对路径和绝对路径
    * */
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
    outlet: 'aux'
  },
  {
    /*
    * 通过 url 传递参数，更改 path 属性的路径值 product => "product/:id"
    * children 用于定义子路由
    * canActivate 接受一个数组，当应用进入路由时，数组里的路由守卫将被依次调用(如果其中一个路由守卫返回 false，则路由守卫将被拒绝掉)
    * canDeactivate 处理当用户从当前路由离开时的情况
    * */
    path: 'product/:id',  // 路径不能一 "/" 开头，如 path: "/product"
    component: ProductComponent,
    children: [
      {path: '', component: ProductDescComponent},
      {path: 'seller/:id', component: SellerInfoComponent}
    ],
    // canActivate: [LoginGuard],
    // canDeactivate: [UnsavedGuard]
    resolve: {
      product: ProductResolve
    }
  },
  {
    /*
    * 把通配符路由放置在最后
    * 如果放在配置项的前面部分，将优先匹配，即显示404页面找不到信息
    * 即便是点击了 product 路由，也将显示404页面找不到信息
    * */
    path: '**',
    component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  /*
  * 下面的 providers 接受一个数组，表示依赖。实例化里面的元素
  * */
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule { }
