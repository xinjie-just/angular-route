import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: number;
  productName: string;
  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    /*
    * snapshot 是参数快照的意思，当从商品详情链接到商品详情按钮时，地址栏的 id  变了，但是传递的参数没变
    * */
    // this.productId = this.routerInfo.snapshot.queryParams['id'];
    // this.productName = this.routerInfo.snapshot.queryParams['name']; 该行为自己添加，报错，未找到原因

    // 下面是通过 url 传递路由参数的方式
    // this.productId = this.routerInfo.snapshot.params['id'];

    // 参数订阅的方式
    this.routerInfo.params.subscribe((params: Params) => this.productId = params['id']);

    this.routerInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

}

export class Product {
  constructor(public id: number, public name: string) {

  }
}
