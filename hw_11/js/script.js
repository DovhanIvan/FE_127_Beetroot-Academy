// 1 Створити масив «Список покупок». Кожен елемент масиву є обєктом, який містить  
// назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// 2 Видалення продукту зі списку (видалення повинно проводитися шляхом створення  нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// 3 Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

class ShoppingList {
    constructor() {
        this.items = [];
    }

    addItem(name, quantity, price) {
        const existingItem = this.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.total = existingItem.quantity * existingItem.price;
        } else {
            const newItem = {
                name,
                quantity,
                price,
                purchased: false,
                total: quantity * price,
            };
            this.items.push(newItem);
        }
    }

    purchaseItem(name) {
        const item = this.items.find(item => item.name === name);
        if (item) {
            item.purchased = true;
        } else {
            console.log(`Product "${name}" not found in the shopping list.`);
        }
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    }

    displayList() {
        const purchasedItems = this.items.filter(item => item.purchased);
        const notPurchasedItems = this.items.filter(item => !item.purchased);
        const combinedList = [...notPurchasedItems, ...purchasedItems];

        console.log("Shopping List:");
        combinedList.forEach(item => {
            console.log(
                `${item.name} - Quantity: ${item.quantity}, Price: $${item.price}, Total: $${item.total}, Purchased: ${item.purchased}`
            );
        });
    }
}

// Example Usage:
const shoppingList = new ShoppingList();
shoppingList.addItem("Apple", 3, 1.5);
shoppingList.addItem("Banana", 2, 0.8);
shoppingList.addItem("Apple", 1, 1.5);
shoppingList.purchaseItem("Banana");
shoppingList.removeItem("Apple");

shoppingList.displayList();