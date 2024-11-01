import { getGalleryData } from "./galeria/datosGaleria";
import { getHeroData } from "./hero/hero";

//----------------Nav
import navData from "./global/nav";
//--------------- Productos 

import { getProductData } from "./productos/producto1";
import { getTestimoniosData } from "./testimonio/testimonio";

import deportes from "./tabla/deportes";
export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {
        ...navData,
    };
    let pageObject = {}
    switch(page){
        case '/gallery.html':
            pageObject = getGalleryData();
            break;
        case '/index.html':
            pageObject = getHeroData();
            pageObject = {
                ...pageObject,
                ...deportes
            }
            break;
        case '/productos/producto1.html':
            pageObject = getProductData();
            break;
            case 'deportes.html':
            pageObject = getProductData();
            break;
        case 'testimonio.html':
            pageObject = getTestimoniosData();
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}