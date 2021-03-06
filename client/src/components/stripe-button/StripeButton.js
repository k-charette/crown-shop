import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_pjcHIIG5MwZPU8vEjP85LV8S00WHvgEmiq";
	const onToken = token => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then(response => {
				alert("Payment successful");
			})
			.catch(error => {
				console.log("Payment error: ", JSON.parse(error));
				alert("There was an issue with the payment.");
			});
	};

	return (
		<div>
			<StripeCheckout
				label="Pay Now"
				name="CRWN Clothing"
				billingAddress
				shippingAddress
				image="https://sendeyo.com/up/d/f3eb2117da"
				description={`Your total is $${price}`}
				amount={priceForStripe}
				panelLabel="Pay Now"
				token={onToken}
				stripeKey={publishableKey}
			/>
		</div>
	);
};

export default StripeCheckoutButton;
