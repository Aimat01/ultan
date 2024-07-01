<template>
    <div class="container">
        <div class="product-title">
            <h4>Қалаған санатты таңдаңыз</h4>
        </div>
        <div class="products">
            <div class="product">
                <img class="product-img" src="./assets/accessories.jpg">
                <div class="layer">
                    <h3>Аксессуарлар</h3>
                </div>
            </div>
            <div class="product">
                <img class="product-img" src="./assets/shoes.jpg">
                <div class="layer">
                    <h3>Аяқ киімдер</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import accessories from './assets/accessories.jpg'
    import shoes from './assets/shoes.jpg'
    export default{
        data(){
            return{
                accessories,
                shoes
            }
        }
    }
</script>

<style scoped>
.container{
    padding: 30px;
}
.product-title{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;
}
.product-title h4{
    font-size: 20px;
    font-weight: 400;
    color: #35231a;
}
.products{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1340px;
    gap: 40px;
    margin: 0 auto;
}
.product{
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    text-align: center;
}
.product-img{
    width: 650px;
}
.layer{
    background: transparent;
    cursor: pointer;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
}
.layer:hover{
    background: rgba(53, 35, 26, 0.7);
}
.layer h3{
    width: 100%;
    font-weight: 500;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    font-size: 22px;
    font-weight: bold;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    opacity: 0;
    transition: 0.5s;
}
.layer:hover h3{
    bottom: 49%;
    opacity: 1;
}

@media (max-width: 1400px) {
    .products{
        width: calc(100vw - 100px);
    }
    .product-img{
        width: calc((100vw - 140px)/2);
    }
}

@media (max-width: 900px) {
    .products{
        grid-template-columns: 1fr;
        width: calc(100vw - 100px);
    }
    .product-img{
        width: calc(100vw - 100px);
    }
    .product-title h4{
        font-size: 16px;
    }
}
</style>