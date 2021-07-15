<template>
    <div>
    </div>
</template>
<script>
import ProductsService from '../api/products_service';
export default {
    name: 'ProductsList',
    data() {
        return {
        }
    },
    mounted: function(){
        ProductsService.getProducts().then(res=>console.warn(res.data))
    }

}
</script>