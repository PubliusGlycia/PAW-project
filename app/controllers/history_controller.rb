class HistoryController < ApplicationController
    before_action :set_comment, only: %i[update destroy]
    def index
      @card = Card.find(params[:card_id])
      @history = @card.comments.order(created_at: :desc)
      respond_to do |format|
        format.json do
          render json: @history
        end
      end
    end
  
    def create
      history = History.create(history_params)
      respond_to do |format|
        format.json do
          render json: history
        end
      end
    end
  
    def update
      @history.update(history_params)
      render json: @history
    end
  
    def destroy
      @history.destroy
      render json: @history
    end
  
    private
  
    def comment_params
      params.require(:history).permit(:email, :card_id, :created_at, :updated_at)
    end
  
    def set_history
      @history = History.find(params[:id])
    end
end
