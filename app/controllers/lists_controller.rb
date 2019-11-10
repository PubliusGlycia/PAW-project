class ListsController < ApplicationController
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

    private

    def list_params
        params.require(:list).permit(:title, :board_id)
    end
end
