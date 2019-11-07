class BoardsController < ApplicationController
  def index
    @boards = Board.all.order(created_at: :desc)
    respond_to do |format|
      format.json do
        render json: @boards
      end
    end
  end
  
  def new; end
  def create; end
  def update; end
  def destroy; end
end
