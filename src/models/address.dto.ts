import { CidadeDTO } from "./cidade.dto";

export interface AddressDTO{
    id : string;
    logradouro : string;
    numero : string;
    complemento : string;bairro : string;
    cep : string;
    cidade : CidadeDTO;
}