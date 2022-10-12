class Expense < ApplicationRecord
    belongs_to :user
    validates :name, :cost, presence: true
end
