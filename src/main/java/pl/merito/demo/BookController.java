package pl.merito.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Scanner;


//https://github.com/arcyro/CW6
@Controller
@RequestMapping("/books")
public class BookController {


    private final BookRepository bookRepository;
    private final CategoryRepository categoryRepository;

    public BookController(BookRepository bookRepository, CategoryRepository categoryRepository) {
        this.bookRepository = bookRepository;
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/list")
    public String showAllBoks(Model model) {
        model.addAttribute("books",
                bookRepository.findAll());
        return "book/list";
    }

    @GetMapping("/add")
    public String addBook(Model model) {
        model.addAttribute("categories",
                categoryRepository.findAll());
        model.addAttribute("book", new Book());
        return "book/add";
    }

    @PostMapping("/add")
    public String addBookPost(Book book) {
        bookRepository.save(book);
        return "redirect:/books/list";
    }

    @GetMapping("/edit/{id}")
    public String editBook(@PathVariable Long id, Model model) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid book Id:" + id));
        model.addAttribute("book", book);
        model.addAttribute("categories", categoryRepository.findAll());
        return "book/edit";
    }

    @PostMapping("/edit/{id}")
    public String editBookPost(@PathVariable Long id, Book book) {
        book.setId(id);
        bookRepository.save(book);
        return "redirect:/books/list";
    }

    @GetMapping("/delete/{id}")
    public String deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
        return "redirect:/books/list";
    }
}
