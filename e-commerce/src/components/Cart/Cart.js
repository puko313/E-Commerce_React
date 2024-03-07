import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'

export default class Store extends Component {
    render () {
        return (
            <section>
                <ProductionConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0 ) {
                            return (
                                <React.Fragment>
                                    <div className='h-full'>
                                    <Title name='your' title ='cart'/>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value ={value} history ={this.props.history}/>
                                    </div>
                                </React.Fragment>
                            );
                        } else {
                            return (<div className='h-full'><EmptyCart /></div>)
                        }
                    }}
                </ProductionConsumer>
            </section>
        )
    }
}