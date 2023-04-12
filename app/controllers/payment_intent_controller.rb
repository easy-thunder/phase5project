class PaymentIntentController < ApplicationController
    skip_before_action :authorize


    def create_payment_intent
        # content_type 'application/json'
        Stripe.api_key = Rails.application.credentials.stripe[:secret_key]
        
        # data = JSON.parse(request.body.read, symbolize_names: true)
        # payment_method_type = data[:paymentMethodType]
        # currency = data[:currency]
        # payment_intent = Stripe::PaymentIntent.create(
        #     amout: data[:amount],
        #     currency: currency,
        #     payment_method_types: [payment_method_type]
        # )
        # {clientSecret: payment_intent.client_secret}.to_json

        


        session = Stripe::Checkout::Session.create({
            mode: 'payment',
            # success_url: 'https://phase5project.onrender.com/confirm',
            success_url: 'http://localhost:4000/confirm',
            line_items:[{
                price_data:{
                    unit_amount: params[:amount_to_charge],
                    currency: 'usd',
                    product_data: {
                        name: 'webSite',
                    }

                },
                quantity: 1,
            }]
        });

        render json: {id: session.id}, status: :created
        
    end




end
