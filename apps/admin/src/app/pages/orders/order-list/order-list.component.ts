import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order, OrdersService } from '@ecommerce-brands/orders';

const STATUS = {
  0: {
    name: 'pending',
    color: 'warning'
  },
  1: {
    name: 'delivered',
    color: 'success'
  },
  2: {
    name: 'failed',
    color: 'danger'
  }
}

@Component({
  selector: 'admin-order-list',
  templateUrl: './order-list.component.html',
  styles: [
  ]
})


export class OrderListComponent implements OnInit {
  orders: Order[];
  orderStatus = STATUS;

  constructor(
    private orderService: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._getOrders();
  }

  showOrder(orderId: string) {
    this.router.navigateByUrl(`orders/${orderId}`);
  }

  private _getOrders() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

}
