class BoardsController < ApplicationController
  before_action :set_board, only: %i[destroy update]

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


  def update
    @board.update(board_params)
    render json: @board
  end
  
  def destroy
    @board.destroy
    render json: @board
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end

  def set_board
    @board = Board.fin(params[:id])
  end
end
