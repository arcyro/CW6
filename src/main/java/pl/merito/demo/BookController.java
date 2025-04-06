package pl.merito.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Scanner;


//https://github.com/arcyro/CW6
@Controller
@RequestMapping("/books")
public class BookController {


    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/list")
    public String showAllBoks(Model model) {
        model.addAttribute("books",
                bookRepository.findAll());
        return "book/list";
    }


    @GetMapping("/add")
    public String addBook(Model model) {
        model.addAttribute("book", new Book());
        return "book/add";
    }

    @PostMapping("/add")
    public String addBookPost(Book book) {
        bookRepository.save(book);
        return "redirect:/books/list";
    }
}
