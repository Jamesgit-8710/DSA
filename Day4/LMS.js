
// Library class
class Library {

    static Books = [{ title: "The India Story", author: "Bimal Jalal", bookId: 5454 }, { title: "A Place Called Home", author: "Preeti Shenoy", bookId: 1212 }];

    static issued = [{ bookId: 5454, issuedTo: "james", date: "25 June 2023" }, { bookId: 5884, issuedTo: "james", date: "25 June 2023" }]


    static async addBook() {
        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const getInput = (question) => {
            return new Promise((resolve) => {
                rl.question(question, (answer) => {
                    resolve(answer);
                });
            });
        };

        const collectInputs = async () => {

            const numberOfInputs = 3; // Specify the desired number of inputs

            for (let i = 1; i <= numberOfInputs; i++) {
                if (i === 1) {
                    this.title = await getInput(`\nEnter the book title : `);
                } else if (i === 2) {
                    this.author = await getInput(`Enter the author name : `);
                } else if (i === 3) {
                    this.id = await getInput(`Enter the book Id : `);
                }
            }

            rl.close();
        };

        await collectInputs();



        this.Books.push({ title: this.title, author: this.author, bookId: parseInt(this.id) });


        const chalk = require('chalk');

        console.log(chalk.bgYellow.black('\nnew book added.'));


        let obj = new lms();
        obj.librarian();
    }

    static async removeBook() {

        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const getInput = (question) => {
            return new Promise((resolve) => {
                rl.question(question, (answer) => {
                    resolve(answer);
                });
            });
        };

        const getUserInput = async () => {

            this.id = await getInput("\nEnter the book Id to be removed: ");

            rl.close();

            this.Books = this.Books.filter((b) => b.bookId !== parseInt(this.id));
        };

        await getUserInput();

        const chalk = require('chalk');

        console.log(chalk.bgYellow.black('\nbook removed from library.'));

        let obj = new lms();
        obj.librarian();

    }

    static async issue() {
        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const getInput = (question) => {
            return new Promise((resolve) => {
                rl.question(question, (answer) => {
                    resolve(answer);
                });
            });
        };

        const collectInputs = async () => {

            const numberOfInputs = 2; // Specify the desired number of inputs

            for (let i = 1; i <= numberOfInputs; i++) {
                if (i === 1) {
                    this.id = await getInput(`\nEnter the book Id : `);
                } else if (i === 2) {
                    this.n = await getInput(`Enter the name to be issued : `);
                }
            }

            rl.close();
        };

        await collectInputs();

        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = currentDate.toLocaleDateString(undefined, options);


        this.issued.push({ bookId: parseInt(this.id), issuedTo: this.n, date: date });


        const chalk = require('chalk');

        console.log(chalk.bgYellow.black('\nBook issued'));


        let obj = new lms();
        obj.librarian();
    }

    static issuedBooks() {
        if (this.issued.length === 0) {
            const chalk = require('chalk');

            console.log(chalk.red("No books issued."));

        } else {
            console.log("\nIssued Books:");
            this.issued.forEach((book) => {
                console.log(book);
            });
        }

        let obj = new lms();
        obj.librarian();
    }

    static async return() {
        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const getInput = (question) => {
            return new Promise((resolve) => {
                rl.question(question, (answer) => {
                    resolve(answer);
                });
            });
        };

        const collectInputs = async () => {

            this.id = await getInput(`\nEnter the book Id : `);

            rl.close();
        };

        await collectInputs();



        this.issued = this.issued.filter((b) => b.bookId !== parseInt(this.id));


        const chalk = require('chalk');

        console.log(chalk.bgYellow.black('\n\n Book returned'));


        let obj = new lms();
        obj.librarian();
    }

    static display() {
        if (this.Books.length === 0) {
            const chalk = require('chalk');

            console.log(chalk.red("No books in the library."));

        } else {
            console.log("\nLibrary Books:");
            this.Books.forEach((book) => {
                console.log(book);
            });
        }

    }

    static displayBooks() {
        if (this.Books.length === 0) {
            const chalk = require('chalk');

            console.log(chalk.red("No books in the library."));

        } else {
            console.log("\nLibrary Books:");
            this.Books.forEach((book) => {
                console.log(book);
            });
        }

        let obj = new lms();
        obj.librarian();
    }
}

// Library management class
class lms {

    check() {

        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("\n> You can exit at any stage by pressing e\n> press 1 for student \n> press 2 for librarian \n\nAre you student or librarian : ", (userInput) => {
            //console.log(userInput); 
            rl.close();

            if (userInput === 'e') {
                const chalk = require('chalk');

                console.log(chalk.red("\nYou are exit.\n"));

            } else if (userInput === '1') {
                this.student();
            } else if (userInput === '2') {
                this.librarian();
            } else {
                const chalk = require('chalk');
                console.log(chalk.red("\nkindly enter the valid input !!!!!!!!!!\n"))
                this.check();
            }

        });



    }

    student() {

        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("\n> press 1 to List the books avaiable in library : ", (userInput) => {
            //console.log(userInput); 
            rl.close();

            if (userInput === 'e') {
                const chalk = require('chalk');

                console.log(chalk.red("\nYou are exit.\n"));

            } else if (userInput === '1') {
                Library.display();
            } else {
                const chalk = require('chalk');
                console.log(chalk.red("\nkindly enter the valid input !!!!!!!!!!\n"))
                this.student();
            }

        });

    }

    librarian() {

        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("\n> press 1 to issue book \n> press 2 to return book  \n> press 3 to add new books in library \n> press 4 to remove books from library \n> press 5 to List all the available books in library \n> press 6 to list the issued books\n Enter the input : ", (userInput) => {
            //console.log(userInput); 
            rl.close();

            if (userInput === 'e') {
                const chalk = require('chalk');

                console.log(chalk.red("\nYou are exit.\n"));

            } else if (userInput === '1') {
                Library.issue();
            } else if (userInput === '2') {
                Library.return();
            } else if (userInput === '3') {
                Library.addBook();
            } else if (userInput === '4') {
                Library.removeBook();
            } else if (userInput === '5') {
                Library.displayBooks();
            } else if (userInput === '6') {
                Library.issuedBooks();
            } else {
                const chalk = require('chalk');
                console.log(chalk.red("\nkindly enter the valid input !!!!!!!!!!\n"))
                this.librarian();
            }

        });

    }

}

let obj = new lms();
obj.check();


