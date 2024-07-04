import { useParams } from 'react-router-dom'

import OFFERS from '../../js/offers.js'

import styles from './OfferDetail.module.css'
export default function OfferDetail(){
    const params = useParams()

    const selectedOffer = OFFERS.filter(o => o.id === params.offerId)
    const offer = selectedOffer
    console.log(offer);

    return <h1>{offer.id}</h1>

}