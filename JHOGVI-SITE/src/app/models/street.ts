export interface Street {
	rua: string;
	numero?: number;
	complemento?: string;
	bairro: string;
	cidade: string;
	estado: string;
	cep: string;
	referencia?: string;
	isPrincipal?: boolean; // ← essa linha

}
