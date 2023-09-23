import { createSlice ,current} from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalItems:0,
        totalPrice:0
    },
    reducers:{
        addItem:(state,action)=>{
           
           
            console.log("---------CUREENT---STATE ",current(state))
            let item=action.payload
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            console.log("itemINCCAR",itemInCart)
            let idx=state.items.findIndex(e=>e.id==item.id)
            console.log("-------------idx FOUNd change",idx)
            // if (itemInCart) {
            //     itemInCart.qty++;
            //   } else {
            //     state.items.push({ ...action.payload, qty: 1 });
            //   }
            if(idx<0){
                item["qty"]=1
                state.items.push(item)

            }else{

                state.items[idx].qty++
                // // item["qty"]=item["qty"]+1
                // console.log("---bef---qty----",item.qty)
                // let qty=item.qty
                // qty+=1

                // item.qty

                     

                // console.log("-VAR-----qty----",qty)
                // console.log("-VAR-----updateItem 22----")
                // // console.log("-aft-----qty----",item.qty)
                // // state.items[idx]=item
                // // console.log("-----------ITEM--",item)

                // state.items.splice(idx,1,item)
                // // console.log("---------INC QTY ",current(state))

            }
            // RTK

            state.totalPrice=0
            state.totalItems=0
            state.items.map((e)=>{
                let itemPrice=e.price?e.price:e.defaultPrice
                state.totalPrice+=(itemPrice/100)*e.qty
                state.totalItems+=e.qty
                let quantity=e.qty
                // let dfPrice=
                let tp=state.totalPrice
                console.log("object",{
                    itemPrice,quantity,tp
                })
            })
           
        },
        removeItem:(state,action)=>{
            // removing the last but can make logic according to index

            let item=action.payload
            let idx=state.items.findIndex(e=>e.id==item.id)
            console.log("-------------idx FOUNd change",idx)

            if(idx<0){

              

            }else{
                if(state.items[idx].qty==1){

                    state.items=state.items.filter((e)=>(e.id==item.id))

                }else{
                    state.items[idx].qty--
                }
            }

            state.totalPrice=0
            state.totalItems=0
            state.items.map((e)=>{
                let itemPrice=e.price?e.price:e.defaultPrice
                state.totalPrice+=(itemPrice/100)*e.qty
                state.totalItems+=e.qty
            })
        },

        // for Ex: original state ={items:["pizza"]}
        clearCart:(state,action)=>{           
            console.log("------clear cart running---",current(state))
            state.items.length=0
            // return {items:[]}

        }
    }
})

// both syntax can be used
export const cartSliceActions=cartSlice.actions

export const{addItem,removeItem,clearCart}=cartSlice.actions


// exporting reducer as default
export default cartSlice.reducer


