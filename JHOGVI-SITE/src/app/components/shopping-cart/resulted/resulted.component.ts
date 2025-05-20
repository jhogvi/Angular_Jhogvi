import { Component, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router'; // Para navegar até o checkout
import { ValuesService } from '../../../services/values.service';

@Component({
  selector: 'app-resulted',
  standalone: false,
  templateUrl: './resulted.component.html',
  styleUrl: './resulted.component.css'
})
export class ResultedComponent {

  @Input() cartItems: any[] = [];
  @Input() totalPrice: number = 0;

  // Variáveis para cálculo
  price: number = 0;
  qtd: number = 0;
  desc: number = 0;

  // Para navegação ao checkout
  constructor(
    public formatBrl: ValuesService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.price = cart.reduce((sum, item) => sum + item.preco * item.qtd, 0);
      this.qtd = cart.reduce((sum, item) => sum + item.qtd, 0);
    });

    this.cartService.getTotal().subscribe(total => {
    //   this.desc = total * 0.1; // desconto de 10%
    });
  }

  // Calcula o total com desconto
  public get total() {
    return this.price - this.desc;
  }

  // Função para realizar a compra (enviar para o checkout)
  handleComprar() {
    // Cria um objeto com as informações que você quer enviar para o checkout
    const checkoutData = {
      cartItems: this.cartItems,
      totalPrice: this.total,
      totalQuantity: this.qtd
    };

    // Aqui você pode armazenar os itens no serviço de checkout ou fazer a navegação
    this.cartService.setCheckoutItems(checkoutData.cartItems);
    this.router.navigate(['/checkout']); // Redireciona para a página de checkout
  }
}
