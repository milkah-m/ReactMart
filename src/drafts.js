 //1. the remove from cart function takes in the item id as an argument
    const removeFromCart = (id) => {
    //2. the setter function maps through the previous items array taking in an individual item as a param:
    setCartItems(prevItems => 
        prevItems.map(item => 
        //3. if the id of an item matches the id passed in as an argument
        {if(item.id === id){
        //4. if the quantity is greater than 1, then modify the object by returning the quantity of the object minus 1
          if (item.quantity > 1) {return {...item, quantity: item.quantity-1}}
          //5. otherwise return null
            return null
        }
        return item
    })
    //6. this clears the null value from the array because it keeps truthy values and eliminates falsy ones
    .filter(Boolean)

    //7. otherwise return the item as it is
)
    
}