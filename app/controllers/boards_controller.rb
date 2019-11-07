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
  
  def create
    board = Board.create(board_params)
    respond_to do |format|
      format.json do
        render json: board
      end
    end
  end


  def update; end
  def destroy; end

  private

  def board_params
    params.require(:board).permit(:title)
  end

end
