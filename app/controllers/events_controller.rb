class EventsController < ApplicationController
  before_action :set_event, only: %i[ update destroy ]
  skip_before_action :authorize
  # GET /events
  def index
    events = Event.all

    render json: events
  end
 



  # POST /events
  def create
    event = Event.create(event_params)
      render json: event, status: :created

  end

  # PATCH/PUT /events/1


  # DELETE /events/1
  def destroy
    @event.destroy
    render json: {destroyed: "destroyed"}, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.

    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.permit(:user_id, :image_use, :poster, :title, :price, :not_included_in_form, :page_type)
    end
end
