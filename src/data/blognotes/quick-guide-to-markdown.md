Markdown is a fast and easy way to create formatted text—with headings, paragraphs, links, and the like—in a plain text editor.

You can use Markdown to write software documentation, blog notes, or [your next best-selling novel](https://drobnik.co/blog/markdown-for-creative-writers).

It has a simple, intuitive syntax that’s both easy to write and easy to understand. Markdown is also easy to learn—here’s a quick guide that will help you with that.

## Headings

To create a heading, add one or more hash signs (#) before a line of text.

```md
# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6
```

#### Result:

![Formatted document title](markdown-headings.jpg)

## Paragraphs

If you want to create paragraphs, separate portions of text with a blank line.

```md
Mrs. Dalloway said she would buy the flowers herself.

For Lucy had her work cut out for her.
```

#### Result:

![Formatted document title](markdown-paragraphs.jpg)

## Line breaks

To add a line break, type two or more spaces at the end of the line and press `Enter`.

## Emphasis

You can add emphasis using asterisks or underscores.

### Italic

For an italic typeface, add one asterisk or underscore before and after a text.

```md
This is some *italic text*.

This is some more _italic text_.
```

#### Result:

![Formatted document title](markdown-italic.jpg)

### Bold

To bold a word or phrase, add two asterisks or underscores before and after the text.

```md
This is some **bold text**.

This is some more __bold text__.
```

#### Result:

![Formatted document title](markdown-bold.jpg)

## Lists

You can create both ordered and unordered lists.

### Unordered lists

To create an unordered list, start each line with a dash (-), an asterisk (*), or a plus sign (+). You can create a nested list by indenting lines.

```md
- First item
- Second item
- Third item

* First item
* Second item
* Third item

+ First item
+ Second item
+ Third item

- First item
- Second item
- Third item
    - Indented item
    - Indented item
```

#### Result:

![Formatted document title](markdown-ul.jpg)

### Ordered lists

To create an ordered list, start each line with a number followed by a full stop. You can create a nested list by indenting lines.

```md
1. First item
2. Second item
3. Third item
4. Fourth item

1. First item
2. Second item
3. Third item
4. Fourth item
    4.1. Indented item
    4.2. Indented item
```

#### Result:

![Formatted document title](markdown-ol.jpg)

## Links

If you want to create a link, enclose a text to be displayed in square brackets and follow it immediately with a URL in round brackets.

```md
[Example website](https://example.com)
```

#### Result:

![Formatted document title](markdown-link.jpg)

## Images

To add an image, type an exclamation mark (!) and follow it by an alt text in square brackets and the image URL in round brackets.

```md
![Markdown logo](images/markdown-logo.png)
```

#### Result:

![Markdown logo](markdown-logo.png)

## Blockquotes

To create a blockquote, start a paragraph with a > sign.

```md
> What a lark! What a plunge!
```

#### Result:

![Formatted document title](markdown-blockquote.jpg)

## Tables

If you want to insert a table, add three or more dashes (-) to create column headers and use pipes (\|) to separate each column. Optionally, you can add pipes on either side of the table.

```md
| Header | Header | Header |
| ------ | ------ | ------ |
| Item   | Item   | Item   |
| Item   | Item   | Item   |
| Item   | Item   | Item   |
```

#### Result:

![Formatted document title](markdown-table.jpg)

## Inline code

You can denote a portion of text as code by enclosing it in backticks (`).

```md
Type `git add .` in the command line.
```

#### Result:

![Formatted document title](markdown-inline-code.jpg)

## Code blocks

To create a code block, add three backticks (```) on the lines before and after the code block.

~~~md
```
<div>
    <p>Hello world!</p>
</div>
```
~~~

#### Result:

![Formatted document title](markdown-codeblock.jpg)

## Resources

If you want to learn more about Markdown, here are a couple of useful resources:

- [Short Markdown tutorial](https://commonmark.org/help/tutorial/index.html)
- [Markdown cheat sheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
