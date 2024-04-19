# awesomeliverpool.github.io

Awesome Liverpool is a chapter of the non-profit Awesome Foundation, which gives out £500 gifts to awesome ideas every single month.

This is the source code for their website!

---

## Developer setup

Check out the code, and pull the latest version of the Bootstrap submodule dependency:

    git checkout git@github.com:awesomeliverpool/awesomeliverpool.github.io.git
    cd awesomeliverpool.github.io
    git submodule update --init

Ensure you are running the version of Ruby [currently supported by Github Pages](https://pages.github.com/versions/). For example, using `rbenv`:

    rbenv install 2.7.4
    rbenv local 2.7.4

Then install Jekyll and the other Github Pages gems, and run the Jekyll development server:

    bundle install
    bundle exec jekyll serve
