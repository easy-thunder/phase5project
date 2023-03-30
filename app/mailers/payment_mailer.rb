class PaymentMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.payment_mailer.new_payment.subject
  #
  def new_payment(user)
    @user = user

    mail to: "jakediehl17@gmail.com"
        subject: "New Purchase from #{user.email}"
  end
end
