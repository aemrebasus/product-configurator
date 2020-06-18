import { environment } from 'src/environments/environment';

const ASSETS = environment.production ? '/product-configurator/assets' : 'assets';


export const getImg = (name: string) => {
    return ASSETS.concat(`/imgs/${name}`);
};



