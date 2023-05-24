"use strict";(self.webpackChunkangular_ecommerce=self.webpackChunkangular_ecommerce||[]).push([[546],{9546:(P,l,c)=>{c.r(l),c.d(l,{FeatureModule:()=>O});var p=c(6895),d=c(4679),t=c(8256),g=c(7565),u=c(695);function _(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"th",13),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",14),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"wordLimit"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"span",15),t.NdJ("click",function(){const i=t.CHM(n).index,a=t.oxw(2);return t.KtG(a.increaseQun(i))}),t._uU(12,"+"),t.qZA(),t.TgZ(13,"span",16),t._uU(14),t.qZA(),t.TgZ(15,"span",17),t.NdJ("click",function(){const i=t.CHM(n).index,a=t.oxw(2);return t.KtG(a.decreaseQun(i))}),t._uU(16,"-"),t.qZA()(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td",18)(20,"i",19),t.NdJ("click",function(){const i=t.CHM(n).$implicit,a=t.oxw(2);return t.KtG(a.onDelete(i.product.id))}),t.qZA()()()}if(2&e){const n=o.$implicit,r=o.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.s9C("alt",n.product.title),t.Q6J("src",n.product.image,t.LSH),t.xp6(2),t.Oqu(t.xi3(7,7,n.product.title,5)),t.xp6(3),t.hij("",n.product.price," EGP"),t.xp6(5),t.Oqu(n.Quantity),t.xp6(4),t.hij("",(n.product.price*n.Quantity).toFixed(3)," EGP")}}function C(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"h3",6),t._uU(4),t.qZA(),t.TgZ(5,"button",7),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.clearAll())}),t._uU(6,"Clear All Cart"),t.qZA()()(),t.TgZ(7,"div",4)(8,"table",8)(9,"thead")(10,"tr")(11,"th",9),t._uU(12,"#"),t.qZA(),t.TgZ(13,"th",9),t._uU(14,"Image"),t.qZA(),t.TgZ(15,"th",9),t._uU(16,"Title"),t.qZA(),t.TgZ(17,"th",9),t._uU(18,"Price"),t.qZA(),t.TgZ(19,"th",9),t._uU(20,"Quantity"),t.qZA(),t.TgZ(21,"th",9),t._uU(22,"Total"),t.qZA(),t.TgZ(23,"th",9),t._uU(24,"Action"),t.qZA()()(),t.TgZ(25,"tbody"),t.YNc(26,_,21,10,"tr",10),t.qZA()(),t.TgZ(27,"div",11)(28,"h3",12),t._uU(29),t.qZA()()()()}if(2&e){const n=t.oxw();t.xp6(4),t.hij("You have ",n.products.length," products in your cart"),t.xp6(22),t.Q6J("ngForOf",n.products),t.xp6(3),t.hij("Total : ",n.calTotalPrice().toFixed(3)," EGP")}}function x(e,o){1&e&&(t.TgZ(0,"div",20)(1,"h2",21),t._uU(2,"Cart is Empty"),t.qZA(),t._UZ(3,"i",22),t.qZA())}const m=[{path:"cart",component:(()=>{class e{constructor(n){this.cartService=n,this.products=[],this.total=0}ngOnInit(){this.cartService.cartProductsSubj.subscribe(n=>{this.products=n}),this.calTotalPrice()}increaseQun(n){this.products[n].Quantity++,localStorage.setItem("cart",JSON.stringify(this.products))}decreaseQun(n){this.products[n].Quantity>1&&(this.products[n].Quantity--,localStorage.setItem("cart",JSON.stringify(this.products)))}calTotalPrice(){this.total=0;for(let n of this.products)this.total+=n.product.price*n.Quantity;return this.total}onDelete(n){this.cartService.deleteProductFromCart(n)}clearAll(){this.cartService.clearAllCart()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],decls:3,vars:2,consts:[[1,"container","mb-3","pt-3"],["class","row",4,"ngIf"],["class","cart-empty text-center text-primary mt-5 pt-5",4,"ngIf"],[1,"row"],[1,"col-md-12"],[1,"info","d-flex","justify-content-between","align-items-center","mb-5"],[1,"text-primary"],[1,"btn","btn-danger",3,"click"],[1,"table","table-striped","text-center"],["scope","col"],[4,"ngFor","ngForOf"],[1,"total-price"],[1,"text-end","text-primary"],["scope","row",1,"counter"],[3,"src","alt"],[1,"increase","text-white","bg-secondary","rounded-2",3,"click"],[1,"quantity","d-inline-block"],[1,"decrease","text-white","bg-secondary","rounded-2",3,"click"],[1,"text-danger",2,"cursor","pointer"],[1,"fa-solid","fa-trash-can",3,"click"],[1,"cart-empty","text-center","text-primary","mt-5","pt-5"],[1,"mb-5"],[1,"fa","fa-shopping-cart"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.YNc(1,C,30,3,"div",1),t.qZA(),t.YNc(2,x,4,0,"div",2)),2&n&&(t.xp6(1),t.Q6J("ngIf",r.products.length),t.xp6(1),t.Q6J("ngIf",!r.products.length))},dependencies:[p.sg,p.O5,u.v],styles:["table[_ngcontent-%COMP%]{box-shadow:#00000059 0 5px 15px;border-radius:10px}table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{line-height:50px}table[_ngcontent-%COMP%]   span.increase[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   span.decrease[_ngcontent-%COMP%]{cursor:pointer;padding:5px 10px;font-weight:700;-webkit-user-select:none;user-select:none}table[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{width:10px;margin:0 25px;-webkit-user-select:none;user-select:none}.cart-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:10rem}@media (min-width: 768px) and (max-width: 991px){table[_ngcontent-%COMP%]{font-size:14px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{line-height:20px}table[_ngcontent-%COMP%]   span.increase[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   span.decrease[_ngcontent-%COMP%]{padding:1px 3px}table[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{margin:0 12px}}@media ((min-width: 576px) and (max-width: 767px)){table[_ngcontent-%COMP%]{font-size:12px;font-weight:700}table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{line-height:20px}table[_ngcontent-%COMP%]   span.increase[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   span.decrease[_ngcontent-%COMP%]{padding:1px 3px}table[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{margin:0 8px}}@media (max-width: 576px){.info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:14px}table[_ngcontent-%COMP%]{font-size:12px;font-weight:700}table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;height:25px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{line-height:15px}table[_ngcontent-%COMP%]   span.increase[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   span.decrease[_ngcontent-%COMP%]{padding:1px 2px}table[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{margin:0 6px}.total-price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px}}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(m),d.Bz]}),e})();var M=c(8771);let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,M.m,h]}),e})()}}]);