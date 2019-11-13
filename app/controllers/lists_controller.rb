class ListsController < ApplicationController
  before_action :set_list, only: %i[update destroy]

  def index
    @board = Board.find(params[:board_id])
    @lists = @board.lists.order(created_at: :desc)
    respond_to do |format|
      format.json do
        render json: @lists
      end
    end
  end

  def create
    list = List.create(list_params)
    respond_to do |format|
      format.json do
        render json: list
      end
    end
  end

  def update
    @list.update(list_params)
    render json: @list
  end

  def destroy
    @list.destroy
    render json: @list
  end

  private

  def list_params
    params.require(:list).permit(:title, :board_id)
  end

  def set_list
    @list = List.find(params[:id])
  end
end
