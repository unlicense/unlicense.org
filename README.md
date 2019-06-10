Unlicense Yourself: Set Your Code Free
======================================

What is the Unlicense?
----------------------

The Unlicense is a template for [disclaiming copyright monopoly interest](https://cr.yp.to/publicdomain.html) in software you've written; in other words, it is a template for dedicating your software to the [public domain](https://stpeter.im/writings/essays/publicdomain.html). It combines a copyright waiver [patterned](https://ar.to/2010/01/dissecting-the-unlicense) after the [very successful](https://www.sqlite.org/famous.html) public domain [SQLite](https://www.sqlite.org/) project with the no-warranty statement from the widely-used [MIT/X11 license](https://en.wikipedia.org/wiki/MIT_License).

Why Use the Unlicense?
----------------------

Because you have more important things to do than enriching lawyers or imposing petty restrictions on users of your code. How often have you passed up on utilizing and contributing to a great software library just because its [open source](https://www.opensource.org/) license was not compatible with your own preferred [flavor](https://www.opensource.org/licenses/alphabetical) of open source? How many precious hours of your life have you spent deliberating how to license your software or worrying about licensing compatibility with other software? You will never get those hours back, but here's your chance to start cutting your losses. Life's too short, let's get back to coding.

The Unlicense
-------------

To opt out of the copyright industry's game altogether and set your code free, put your next software project into the [public domain](https://stpeter.im/writings/essays/publicdomain.html) using the following (un)licensing statement:

    This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.

    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

    For more information, please refer to <https://unlicense.org/>

In a saner world, you would only need the first one or two paragraphs. For the time being you'll probably [want to retain](https://ar.to/2010/01/dissecting-the-unlicense) the whole shebang. (You should feel free, though, to leave out the last line containing the link to this site, if that's your preference.)

You would traditionally put the above statement into a file named `COPYING` or `LICENSE`. However, to explicitly distance yourself from the whole concept of copyright licensing, we recommend that you put your unlicensing statement in a file named [`UNLICENSE`](./UNLICENSE). Doing so also means that your project can more easily be found on e.g. [GitHub][] or [Bitbucket][], enabling others to reuse your code in their own unencumbered public domain projects. When publishing your code to registries such as npm o PyPI, set the license field to `Unlicense` to mark the usage of this license.

For a comprehensive listing of software using the Unlicense, [google for the first line of the Unlicense][Google Search]. It was purposely worded uniquely, which means that all the returned search results are likely to relate to the Unlicense in some way.

Unlicensing Contributions
-------------------------

In order to ensure your project remains completely free and unencumbered by anyone's copyright monopoly, it is advisable that you ask any major contributors to explicitly dedicate their code-base contributions to the public domain.

This removes any possible ambiguity as to what terms somebody might have thought they were contributing under, in case of a future dispute. These concerns are not unique to public domain software. Most large, established open-source projects have a Contributor License Agreement ([CLA](https://en.wikipedia.org/wiki/Contributor_License_Agreement)) process, of varying degrees of formality.

At minimum, you might ask your contributors to accompany any [non-trivial](https://www.gnu.org/prep/maintain/maintain.html#Legally-Significant) patches with a simple statement like the following:

    I dedicate any and all copyright interest in this software to the
    public domain. I make this dedication for the benefit of the public at
    large and to the detriment of my heirs and successors. I intend this
    dedication to be an overt act of relinquishment in perpetuity of all
    present and future rights to this software under copyright law.

Better yet is to ask the major contributors to [digitally sign](https://en.wikipedia.org/wiki/Digital_signature) a more explicit copyright release (see an example [`WAIVER`](./WAIVER) file), and then to keep a record of such signatures in an `AUTHORS` file accompanying your software. Using [GnuPG](https://www.gnupg.org/), contributors can sign a copyright waiver file as follows:

    $ gpg --no-version --armor --sign WAIVER

Note that if a contributor makes significant changes or enhancements in his capacity as an employee of some formal organization, then the above may be insufficient and you would additionally need to ask for a copyright disclaimer signed by a company officer. For more information, have a look at [how the SQLite project handles this](https://www.sqlite.org/copyright.html). The Free Software Foundation (FSF) also [provides an example](https://www.fsf.org/licensing/licenses/gpl-howto.html) of a simple copyright disclaimer to be signed by an employer.

For a concrete example of this contributor process, see [how the unlicensed RDF.rb project has handled this](https://lists.w3.org/Archives/Public/public-rdf-ruby/2010May/0013.html).

Unlicensed Free Software
------------------------

Here follows a sample of some of the software projects that have already adopted the Unlicense or a derivative thereof:

* [Bitcoin.php](https://github.com/mikegogulski/bitcoin-php), a PHP library (and plugins for [WP e-Commerce](https://github.com/mikegogulski/bitcoin-wp-e-commerce), [Ubercart](https://github.com/mikegogulski/uc_bitcoin), and [VirtueMart](https://github.com/mikegogulski/bitcoin-virtuemart)) for the [Bitcoin](https://bitcoin.org/) peer-to-peer digital currency system.
* [Bitcoin::OTC](https://github.com/bendiken/bitcoin-otc), a Ruby client for fetching ratings data from the `#bitcoin-otc` trading database.
* [BitWasp](https://github.com/Bit-Wasp/BitWasp), Open Source Bitcoin Marketplace Software
* [CRM114.rb](https://rubygems.org/gems/crm114), a Ruby interface to the CRM114 Controllable Regex Mutilator.
* [CryptLib](https://github.com/WaterJuice/CryptLib), a cryptographic library for C that implements the MD5, SHA-1, SHA-2, and RC4 algorithms.
* [CSS3 Buttons](https://github.com/michenriksen/css3buttons), a simple CSS framework for creating good-looking GitHub style button links.
* [Dagny](https://github.com/zacharyvoase/dagny), a Django adaptation of Ruby on Rails's Resource-Oriented Architecture.
* [Distance](https://github.com/awnist/distance), a CoffeeScript and JavaScript module for calculating Levenshtein/Sift3 distances between strings.
* [Epoch](https://universe2.us/epoch.html), a lightweight init daemon for Linux systems.
* [Fancypants](https://github.com/simonwhitaker/fancypants), a JavaScript and Python library of data visualisation trinkets.
* [fastFrag](https://github.com/gregory80/fastFrag), a simple JSON-based client-side JavaScript templating engine.
* [GrowlAMQP](https://gemcutter.org/gems/growl-amqp), a Ruby daemon that reports AMQP messages via Growl.
* [HTTPkit](https://github.com/lgierth/httpkit), a Ruby toolkit for building HTTP clients and servers.
* [Have-a-Cookie](https://have-a-cookie.tumblr.com/), a Google Chrome extension for enhanced-privacy cookie management.
* [I2P.rb](https://rubygems.org/gems/i2p), a Ruby library for interacting with the [I2P](https://www.i2p2.de/) anonymity network.
* [JavaScript Object Graph](http://jsog.sourceforge.net/), a Java library designed to make working with JSON simple.
* [jQuery JSON-RPC](https://github.com/datagraph/jquery-jsonrpc), a JavaScript JSON-RPC library for jQuery.
* [JSched](https://github.com/vladdu/jsched), a simple Java framework for coroutines.
* [jStorage](http://www.jstorage.info), a cross-browser key-value store database to store data locally in the browser.
* [Kakoune](https://github.com/mawww/kakoune), an experimental text editor heavily inspired by Vim.
* [lein-cucumber](https://github.com/nilswloka/lein-cucumber), a simple Leiningen plugin for running Clojure-based Cucumber-JVM specifications.
* [libcpr](https://github.com/dryproject/libcpr), a backport of the core data structures and algorithms from the C++11 standard library to C.
* [loopozorg](https://github.com/narfdotpl/loopozorg), Python infrastructure for executing shell commands on file modification.
* [Mailr](https://mailr.org/), a Ruby on Rails-based webmail application.
* [Machinery](https://sourceforge.net/projects/machinery/), a C library for dynamic x86 and MIPS code generation.
* [Markdoc](https://github.com/zacharyvoase/markdoc), a Python-based lightweight Markdown-based wiki system.
* [MathIsFun2](https://github.com/saumya/MathIsFun2), a simple iPhone game.
* [miniz.c](https://code.google.com/p/miniz/), a single-source-file, high-performance deflate/inflate compression library with a [zlib](https://zlib.net/)-compatible API.
* [Nano](https://github.com/rwarasaurus/nano), a nano-sized PHP framework.
* [Nightweb](http://nightweb.net), an anonymous P2P social network for Android smartphones and PCs.
* [Nobox](https://github.com/serprex/nobox), a minimalist stacking window manager written in C using XCB.
* [node-rdf](https://npmjs.org/package/rdf), an ECMAScript/Node.js library for handling RDF data.
* [Nuush](https://chr.tx0.org/nuush), a Bash-based command-line RSS feed reader.
* [OpenPGP.rb](https://rubygems.org/gems/openpgp), a Ruby implementation of the OpenPGP Message Format (RFC 4880).
* [OTRXMPPChannel](https://github.com/mikegogulski/python-otrxmppchannel), An OTR-XMPP communication channel for Python
* [OTRXMPPLogger](https://github.com/mikegogulski/python-otrxmpplogger), Logging over OTR and XMPP in Python
* [pdiffer](https://pypi.python.org/pypi/pdiffer), a Python interface to the PerceptualDiff tool.
* [Pondasee](https://github.com/tokokoo/pondasee), a frontend web developer starter kit using SCSS and Compass.
* [Poolboy](https://github.com/devinus/poolboy), a hunky Erlang worker pool factory.
* [Prosper](https://prosper-lib.com/), a PHP 5.3 database abstraction layer library.
* [Proto](https://github.com/droptype/proto), a front-end web prototyping tool.
* [Pure CSS](https://github.com/sergeylukin) widgets, including a 3D bar graph, jigsaw puzzle piece, and others.
* [Puzzle Code](https://github.com/mikegagnon/puzzlecode), a game that teaches computer programming just by playing the game.
* [pyFaceGraph](https://github.com/iplatform/pyFaceGraph), a Python client library for Facebook's Open Graph Protocol.
* [Qataki](https://github.com/chr/qataki), a command-line Identi.ca/StatusNet/Twitter client.
* [Rack::Throttle](https://rubygems.org/gems/rack-throttle), Rack middleware for rate-limiting incoming HTTP requests.
* [RDF.rb](https://rubygems.org/gems/rdf), a Ruby library for working with Resource Description Framework (RDF) data.
* [RDFI.js](https://github.com/webr3/rdf-interfaces), a JavaScript implementation of the core [RDF Interfaces Specification](https://www.w3.org/2010/02/rdfa/sources/rdf-interfaces/).
* [RSA.rb](https://rubygems.org/gems/rsa), a Ruby implementation of the RSA encryption algorithm and the PKCS#1 cryptography standard.
* [tkpip](https://github.com/lishnih/tkpip), a tool for installing and managing Python packages based on Tk.
* [tkrequest](https://github.com/lishnih/tkrequest), a tool for sending and receiving HTTP requests based on Tk.
* [Tor.rb](https://rubygems.org/gems/tor), a Ruby library for interacting with the [Tor](https://www.torproject.org/) anonymity network.
* [Tubras](https://code.google.com/p/tubras/), a C++/Lua game engine.
* [Tween-o-Matic](https://github.com/simonwhitaker/tween-o-matic), a Mac OS X application for designing CAMediaTimingFunction animation curves.
* [Sidenote](https://github.com/mikegagnon/sidenote), a new document format optimized for reading & writing skimmable documents.
* [Spira](https://rubygems.org/gems/spira), a [Linked Data](https://linkeddata.org/) ORM for Ruby.
* [Sudoku](https://github.com/wimleers/sudoku/wiki), a fancy, feature-complete, cross-platform Sudoku app written in C++/Qt.
* [SXP](https://rubygems.org/gems/sxp), a data interchange format based on S-expressions.
* [UN](https://unlicense.developpez.com/), aiming to write a public domain all-purpose standard library for Java.
* [UpTheAsset](https://uptheasset.org/), a semantic ontology and system for double-entry bookkeeping and accounting.
* [weblayer](https://github.com/thruflo/weblayer), a lightweight, componentized Python package for writing web applications.
* [WP Citation Manager](https://wordpress.org/extend/plugins/citation-manager/), a WordPress plugin for managing external citations to content.
* [WP Disable Registration Email](https://wordpress.org/extend/plugins/disable-registration-email/), a WordPress plugin for disabling post-registration e-mails to the administrator.
* [xo](https://github.com/sarnesjo/xo), a superoptimizer for generating optimal x86 assembly programs.
* [youtube-dl](https://rg3.github.io/youtube-dl/), a command-line program for downloading videos from YouTube.
* [ZF-Boilerplate](https://github.com/michael-romer/zf-boilerplate), a pre-packaged, pre-configured Zend Framework-based blueprint for enterprise-grade PHP applications.

If you would like your own project added to this list, please [create a pull request](https://github.com/unlicense/unencumbered-software/pulls?q=is%3Apr+is%3Aclosed) on the [Registry of Unencumbered Software Projects](https://github.com/unlicense/unencumbered-software).

For a more comprehensive listing of software using the Unlicense, [google for the first line of the Unlicense][Google Search]. See also a [list of authors](https://twitter.com/theunlicense/lists/developers/members) who unlicense the software they write as a matter of course.

Public Domain Software
----------------------

Some examples of well-known public domain or [license-free](https://en.wikipedia.org/wiki/License-free_software) software libraries and applications:

* [CERN httpd](https://en.wikipedia.org/wiki/CERN_httpd), the original World Wide Web daemon developed by Tim Berners-Lee, was in the public domain.
* [SQLite](https://www.sqlite.org/), the [most widely-deployed](https://www.sqlite.org/mostdeployed.html) SQL database in the world, is [in the public domain](https://www.sqlite.org/copyright.html).
* [qmail](http://www.qmail.org/), the [second-most popular](http://www.qmail.org/top.html) MTA on the Internet, is [in the public domain](https://cr.yp.to/qmail/dist.html).
* [djbdns](https://cr.yp.to/djbdns.html), the [second-most popular](https://en.wikipedia.org/wiki/Djbdns#cite_note-2) DNS server software on the Internet, is in the public domain.
* [libdjb](https://www.fefe.de/djb/), a project aiming to make the excellent libraries from Dan Bernstein available to a wider public by extracting them from his packages and providing a minimal Makefile for each library.
* [NaCl](https://nacl.cr.yp.to/), an easy-to-use high-speed software library for network communication, encryption, decryption, signatures, etc., [is in the public domain](https://nacl.cr.yp.to/features.html).
* [BLAST](https://en.wikipedia.org/wiki/BLAST), one of the most widely used bioinformatics programs, is in the public domain.
* [dlmalloc](http://g.oswego.edu/dl/html/malloc.html), a widely-used memory allocator implementation for C, is in the public domain.
* [I2P](https://www.i2p2.de/), an anonymous overlay network implementation, is largely [in the public domain](https://www.i2p2.de/licenses.html).
* [CMUCL](https://www.cons.org/cmucl/), a popular implementation of the [Common Lisp](https://en.wikipedia.org/wiki/Common_Lisp) programming language, is mostly in the public domain.
* [SBCL](http://www.sbcl.org/), another popular Common Lisp implementation, is likewise mostly [in the public domain](http://www.sbcl.org/history.html).
* [CLIPS](http://clipsrules.sourceforge.net/), a widely-used forward-chaining, rule-based inference engine, is in the public domain.
* [byacc](https://invisible-island.net/byacc/byacc.html), the Berkeley [Yacc](https://en.wikipedia.org/wiki/Yacc) parser generator, is in the public domain.
* [Lemon](https://www.hwaci.com/sw/lemon/), a thread-safe LALR(1) parser generator, is in the public domain.
* [re2c](https://re2c.org/), a high-performance lexer generator, is in the public domain.
* [Docutils](http://docutils.sourceforge.net/), the Python text-processing system, is mostly in the public domain.
* [C++ Big Integer Library](https://mattmccutchen.net/bigint/), a library for integer arithmetic, is in the public domain.
* [PyCrypto](https://www.dlitz.net/software/pycrypto/), the Python cryptography toolkit, is largely in the public domain.
* [Crypto++](https://www.cryptopp.com/), a cryptographic library for C++, is mostly in the public domain.
* [MPICH2](https://www.mcs.anl.gov/research/projects/mpich2/), a high-performance implementation of the [MPI](https://en.wikipedia.org/wiki/Message_Passing_Interface) standard, is largely in the public domain.
* [MinGW](http://www.mingw.org/)'s runtime, which provides POSIX compatibility for Windows, is [in the public domain](http://www.mingw.org/license).
* [Phyz](https://phyz.ath.cx/), a soft body dynamics physics engine for Windows, is in the public domain.
* [NBDS](https://code.google.com/p/nbds/), a C library for various lock-free algorithms (including a lock-free hash table), is in the public domain.
* [Djehuty](https://github.com/wilkie/djehuty), a fully-verifiable operating system written in the D programming language, is in the public domain.
* [XOS](https://openxos.org/), a multitasking operating system for the x86 architecture, is in the public domain.
* [PDCLib](http://pdclib.rootdirectory.de/), a minimal C standard library implementation, is in the public domain.
* [PDPCLIB](http://pdos.sourceforge.net/), another C standard library implementation, is in the public domain.
* [PDOS](http://pdos.sourceforge.net/), a DOS-compatible operating system, is in the public domain.
* [SubC](https://www.t3x.org/subc/), a fast and simple compiler for a clean subset of the C programming language, is in the public domain.
* [c11threads.h](https://github.com/jtsiomb/c11threads), a simple C11 threads implementation based on POSIX threads, is in the public domain.
* [mpkg](https://charon.persephoneslair.org/~andrea/software/mpkg/), a minimalist package manager for *nix systems, is in the public domain.

For other listings of public domain software, see [Wikipedia](https://en.wikipedia.org/wiki/Category:Public_domain_software), [Google Code Hosting](https://code.google.com/hosting/search?q=%22public+domain%22), [Savannah](https://www.google.com/search?q=site%3Asavannah.nongnu.org+%22public+domain%22), [Launchpad](https://launchpad.net/projects/+index?text=%22public+domain%22), [CodePlex](https://www.codeplex.com/site/search?projectSearchText=%22public%20domain%22) and the [Python Cheeseshop](https://pypi.python.org/pypi?:action=browse&c=91).

Other Popular Unlicenses
------------------------

Some other ways to set your code free:

* [BOLA - Buena Onda License Agreement](https://blitiri.com.ar/p/bola/) is similar to the Unlicense in intent.
* [CC0 - Creative Commons Zero](https://creativecommons.org/publicdomain/zero/1.0/) is not intended for software per se.
* [WTFPL - Do What The Fuck You Want To Public License](http://sam.zoy.org/wtfpl/) can't be beat for blunt directness.

Unlicensing Resources
---------------------

If setting your code entirely free still seems a somewhat daunting prospect, try these perspectives on for size:

* [Who's Afraid of the Public Domain?](https://stpeter.im/writings/essays/publicdomain.html)
* [The Surprising History of Copyright and The Promise of a Post-Copyright World](https://questioncopyright.org/promise)
* [What is Copyright?](https://stpeter.im/writings/essays/whatiscopyright.html)
* [Placing Documents into the Public Domain](https://cr.yp.to/publicdomain.html)
* [The Unlicense: The First Year in Review](https://ar.to/2011/01/unlicense-1st-year)
* [Licensed, License-Free, and Unlicensed Code](https://ar.to/2010/12/licensing-and-unlicensing)
* [Set Your Code Free](https://ar.to/2010/01/set-your-code-free)
* [Dissecting the Unlicense: Software Freedom in Four Clauses and a Link](https://ar.to/2010/01/dissecting-the-unlicense)
* [Why I'm Going Public](https://zacharyvoase.com/2010/01/04/unlicense/)
* [I Just Unlicensed My Software](http://mikegagnon.com/2013/09/30/i-just-unlicensed-my-software/)
* [Language Matters: Framing The Copyright Monopoly So We Can Keep Our Liberties](https://torrentfreak.com/language-matters-framing-the-copyright-monopoly-so-we-can-keep-our-liberties-130714/)

[anti-copyright]:     https://en.wikipedia.org/wiki/Anti-copyright
[Google Search]:      https://www.google.com/search?q=%22This+is+free+and+unencumbered+software+released+into+the+public+domain%22&filter=0
[GitHub]:             https://github.com/search?q=license%3Aunlicense
[Bitbucket]:          https://www.google.com/search?q=%22This+is+free+and+unencumbered+software+released+into+the+public+domain%22+site%3Abitbucket.org&filter=0
