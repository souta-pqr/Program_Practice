#include <iostream>

struct Book {
    std::string title;
    std::string author;
    int price;
    int years;
};

void inputBookInfo(Book &book) {
    std::cout << "Enter book title: ";
    std::getline(std::cin, book.title);
    std::cout << "Enter book author: ";
    std::getline(std::cin, book.author);
    std::cout << "Enter book price: ";
    std::cin >> book.price;
    std::cout << "Enter book years: ";
    std::cin >> book.years;
    std::cin.ignore(); // To ignore the newline character left in the buffer
}

void displayBookInfo(const Book &book) {
    std::cout << "Book Title: " << book.title << std::endl;
    std::cout << "Book Author: " << book.author << std::endl;
    std::cout << "Book Price: " << book.price << std::endl;
    std::cout << "Book Years: " << book.years << std::endl;
}

void displayBooksUnderPrice(const Book books[], int size, int maxPrice) {
    for (int i = 0; i < size; ++i) {
        if (books[i].price <= maxPrice) {
            displayBookInfo(books[i]);
        }
    }
}

int main() {
    int numBooks;
    std::cout << "Enter the number of books: ";
    std::cin >> numBooks;
    std::cin.ignore(); // To ignore the newline character left in the buffer

    Book *books = new Book[numBooks];

    for (int i = 0; i < numBooks; ++i) {
        std::cout << "Enter details for book " << i + 1 << ":\n";
        inputBookInfo(books[i]);
    }

    int maxPrice;
    std::cout << "Enter the maximum price to filter books: ";
    std::cin >> maxPrice;

    std::cout << "Books with price under " << maxPrice << ":\n";
    displayBooksUnderPrice(books, numBooks, maxPrice);

    delete[] books;
}