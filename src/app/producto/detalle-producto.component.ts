import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto:Producto =null

  constructor(private productoService:ProductoService,
    private activetedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    const id=this.activetedRoute.snapshot.params.id;
    this.productoService.detail(id).subscribe(
      data=>{
        this.producto=data
      },err=>{
        this.toastr.error(err.error.mensaje,'Fail',{timeOut:3000, positionClass:'toast-bottom-right'})
        this.router.navigate(['/'])
      }
    )
  }
  volver():void{
    this.router.navigate(['/'])
  }

}
