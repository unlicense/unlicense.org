---
title: "Unlicense Yourself: Set Your Code Free"

# See: https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Unlicense Yourself"
  text: "Set Your Code Free"
  tagline:
  actions:

features:
---

# What is the Unlicense?

The Unlicense is a template for [disclaiming copyright monopoly interest](http://cr.yp.to/publicdomain.html) in software you've written; in other words, it is a template for dedicating your software to the [public domain](http://stpeter.im/writings/essays/publicdomain.html). It combines a copyright waiver [patterned](http://ar.to/2010/01/dissecting-the-unlicense) after the [very successful](http://www.sqlite.org/famous.html) public domain [SQLite](http://www.sqlite.org/) project with the no-warranty statement from the widely-used [MIT/X11 license](http://en.wikipedia.org/wiki/MIT_License).

## Why Use the Unlicense?

Because you have more important things to do than enriching lawyers or imposing petty restrictions on users of your code. How often have you passed up on utilizing and contributing to a great software library just because its [open source](http://www.opensource.org/) license was not compatible with your own preferred [flavor](http://www.opensource.org/licenses/alphabetical) of open source? How many precious hours of your life have you spent deliberating how to license your software or worrying about licensing compatibility with other software? You will never get those hours back, but here's your chance to start cutting your losses. Life's too short, let's get back to coding.

## The Unlicense

To opt out of the copyright industry's game altogether and set your code free, put your next software project into the [public domain](http://stpeter.im/writings/essays/publicdomain.html) using the following (un)licensing statement:

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

In a saner world, you would only need the first one or two paragraphs. For the time being you'll probably [want to retain](http://ar.to/2010/01/dissecting-the-unlicense) the whole shebang. (You should feel free, though, to leave out the last line containing the link to this site, if that's your preference.)

You would traditionally put the above statement into a file named `COPYING` or `LICENSE`. However, to explicitly distance yourself from the whole concept of copyright licensing, we recommend that you put your unlicensing statement in a file named [`UNLICENSE`](https://unlicense.org/UNLICENSE). Doing so also means that your project can more easily be found on e.g. [GitHub][] or [Bitbucket][], enabling others to reuse your code in their own unencumbered public domain projects. When publishing your code to registries such as npm o PyPI, set the license field to `Unlicense` to mark the usage of this license.

For a comprehensive listing of software using the Unlicense, [google for the first line of the Unlicense][Google Search]. It was purposely worded uniquely, which means that all the returned search results are likely to relate to the Unlicense in some way.

## Unlicensing Contributions

In order to ensure your project remains completely free and unencumbered by anyone's copyright monopoly, it is advisable that you ask any major contributors to explicitly dedicate their code-base contributions to the public domain.

This removes any possible ambiguity as to what terms somebody might have thought they were contributing under, in case of a future dispute. These concerns are not unique to public domain software. Most large, established open-source projects have a Contributor License Agreement ([CLA](http://en.wikipedia.org/wiki/Contributor_License_Agreement)) process, of varying degrees of formality.

At minimum, you might ask your contributors to accompany any [non-trivial](http://www.gnu.org/prep/maintain/maintain.html#Legally-Significant) patches with a simple statement like the following:

    I dedicate any and all copyright interest in this software to the
    public domain. I make this dedication for the benefit of the public at
    large and to the detriment of my heirs and successors. I intend this
    dedication to be an overt act of relinquishment in perpetuity of all
    present and future rights to this software under copyright law.

Better yet is to ask the major contributors to [digitally sign](http://en.wikipedia.org/wiki/Digital_signature) a more explicit copyright release (see an example [`WAIVER`](https://unlicense.org/WAIVER) file), and then to keep a record of such signatures in an `AUTHORS` file accompanying your software. Using [GnuPG](http://www.gnupg.org/), contributors can sign a copyright waiver file as follows:

    $ gpg --no-version --armor --sign WAIVER

Note that if a contributor makes significant changes or enhancements in his capacity as an employee of some formal organization, then the above may be insufficient and you would additionally need to ask for a copyright disclaimer signed by a company officer. For more information, have a look at [how the SQLite project handles this](http://www.sqlite.org/copyright.html). The Free Software Foundation (FSF) also [provides an example](http://www.fsf.org/licensing/licenses/gpl-howto.html) of a simple copyright disclaimer to be signed by an employer.

For a concrete example of this contributor process, see [how the unlicensed RDF.rb project has handled this](http://lists.w3.org/Archives/Public/public-rdf-ruby/2010May/0013.html).

## Unlicensed Free Software

Here follows a sample of some of the software projects that have already adopted the Unlicense or a derivative thereof:

- [CryptLib](https://github.com/WaterJuice/CryptLib), a cryptographic library for C that implements the MD5, SHA-1, SHA-2, and RC4 algorithms.
- [Epoch](http://universe2.us/epoch.html), a lightweight init daemon for Linux systems.
- [furl](https://github.com/gruns/furl), a small Python library that makes parsing and manipulating URLs easy.
- [gl3w](https://github.com/skaslev/gl3w), simple OpenGL core profile loading for Python.
- [Kakoune](https://github.com/mawww/kakoune), an experimental text editor heavily inspired by Vim.
- [miniz.c](https://github.com/richgel999/miniz), a single-source-file, high-performance deflate/inflate compression library with a zlib-compatible API.
- [Nobox](https://github.com/serprex/nobox), a minimalist stacking window manager written in C using XCB.
- [node-rdf](http://npmjs.org/package/rdf), an ECMAScript/Node.js library for handling RDF data.
- [PicoSpeaker](https://github.com/shilbert01/picospeaker), an interface to the SVox Pico text-to-speech system.
- [Poolboy](https://github.com/devinus/poolboy), a hunky Erlang worker pool factory.
- [Protoflow](https://github.com/AsimovPlatform/protoflow), a framework for flow-based programming (FBP) in Rust using Protocol Buffers messages.
- [pyFaceGraph](https://github.com/iplatform/pyFaceGraph), a Python client library for Facebook's Open Graph Protocol.
- [RDF.rb](https://github.com/ruby-rdf/rdf), a Ruby library for working with Resource Description Framework (RDF) data.
- [RDFI.js](https://github.com/webr3/rdf-interfaces), a JavaScript implementation of the core [RDF Interfaces Specification](http://www.w3.org/2010/02/rdfa/sources/rdf-interfaces/).
- [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge), a PHP web application that generates RSS feeds for websites that don't have one.
- [stb](https://github.com/nothings/stb), a set of single-file public domain libraries for C/C++.
- [Sudoku](https://github.com/wimleers/sudoku/wiki), a fancy, feature-complete, cross-platform Sudoku app written in C++/Qt.
- [SXP](http://sxp.rubyforge.org/), a data interchange format based on S-expressions.
- [Tor.rb](https://github.com/dryruby/tor.rb), a Ruby library for interacting with the [Tor](http://www.torproject.org/) anonymity network.
- [Tween-o-Matic](https://github.com/simonwhitaker/tween-o-matic), a Mac OS X application for designing CAMediaTimingFunction animation curves.
- [UN](http://unlicense.developpez.com/), aiming to write a public domain all-purpose standard library for Java.
- [youtube-dl](https://github.com/ytdl-org/youtube-dl), a command-line program for downloading videos from YouTube.

If you would like your own project added to this list, please [create a pull request](https://github.com/unlicense/unencumbered-software/pulls?q=is%3Apr+is%3Aclosed) on the [Registry of Unencumbered Software Projects](https://github.com/unlicense/unencumbered-software) or tweet an addition request to [@bendiken](https://x.com/bendiken) on X.

For a more comprehensive listing of software using the Unlicense, [google for the first line of the Unlicense][Google Search]. See also a [list of authors](http://twitter.com/theunlicense/developers) who unlicense the software they write as a matter of course.

## Public Domain Software

Some examples of well-known public domain or [license-free](http://en.wikipedia.org/wiki/License-free_software) software libraries and applications:

- [CERN httpd](http://en.wikipedia.org/wiki/CERN_httpd), the original World Wide Web daemon developed by Tim Berners-Lee, was [in the public domain](http://tenyears-www.web.cern.ch/tenyears-www/Welcome.html).
- [SQLite](http://www.sqlite.org/), the [most widely-deployed](http://www.sqlite.org/mostdeployed.html) SQL database in the world, is [in the public domain](http://www.sqlite.org/copyright.html).
- [qmail](http://www.qmail.org/), the [second-most popular](http://www.qmail.org/top.html) MTA on the Internet, is [in the public domain](http://cr.yp.to/qmail/dist.html).
- [djbdns](http://cr.yp.to/djbdns.html), the [second-most popular](http://en.wikipedia.org/wiki/Djbdns#cite_note-2) DNS server software on the Internet, is in the public domain.
- [libdjb](http://www.fefe.de/djb/), a project aiming to make the excellent libraries from Dan Bernstein available to a wider public by extracting them from his packages and providing a minimal Makefile for each library.
- [NaCl](http://nacl.cr.yp.to/), an easy-to-use high-speed software library for network communication, encryption, decryption, signatures, etc., [is in the public domain](http://nacl.cr.yp.to/features.html).
- [BLAST](http://en.wikipedia.org/wiki/BLAST), one of the most widely used bioinformatics programs, is in the public domain.
- [dlmalloc](http://g.oswego.edu/dl/html/malloc.html), a widely-used memory allocator implementation for C, is in the public domain.
- [I2P](http://www.i2p2.de/), an anonymous overlay network implementation, is largely [in the public domain](http://www.i2p2.de/licenses.html).
- [HLA](http://web.mac.com/randyhyde/HighLevelAsm/), a high-level assembler for the x86 architecture, is in the public domain.
- [CMUCL](http://www.cons.org/cmucl/), a popular implementation of the [Common Lisp](http://lispers.org) programming language, is mostly in the public domain.
- [SBCL](http://www.sbcl.org/), another popular Common Lisp implementation, is likewise mostly [in the public domain](http://www.sbcl.org/history.html).
- [CLIPS](http://clipsrules.sourceforge.net/), a widely-used forward-chaining, rule-based inference engine, is in the public domain.
- [byacc](http://invisible-island.net/byacc/byacc.html), the Berkeley [Yacc](http://en.wikipedia.org/wiki/Yacc) parser generator, is in the public domain.
- [Lemon](http://www.hwaci.com/sw/lemon/), a thread-safe LALR(1) parser generator, is in the public domain.
- [re2c](http://re2c.org/), a high-performance lexer generator, is in the public domain.
- [Docutils](http://docutils.sourceforge.net/), the Python text-processing system, is mostly in the public domain.
- [LibTomCrypt](http://libtom.org/?page=features&newsitems=5&whatfile=crypt), a portable cryptographic toolkit for C, is in the public domain.
- [LibTomMath](http://libtom.org/?page=features&newsitems=5&whatfile=ltm), a portable number theoretic multiple-precision integer library for C, is in the public domain.
- [C++ Big Integer Library](http://mattmccutchen.net/bigint/), a library for integer arithmetic, is in the public domain.
- [PyCrypto](http://www.dlitz.net/software/pycrypto/), the Python cryptography toolkit, is largely in the public domain.
- [Crypto++](http://www.cryptopp.com/), a cryptographic library for C++, is mostly in the public domain.
- [MPICH2](http://www.mcs.anl.gov/research/projects/mpich2/), a high-performance implementation of the [MPI](http://en.wikipedia.org/wiki/Message_Passing_Interface) standard, is largely in the public domain.
- [MinGW](http://www.mingw.org/)'s runtime, which provides POSIX compatibility for Windows, is [in the public domain](http://www.mingw.org/license).
- [Phyz](http://phyz.ath.cx/), a soft body dynamics physics engine for Windows, is in the public domain.
- [NBDS](http://code.google.com/p/nbds/), a C library for various lock-free algorithms (including a lock-free hash table), is in the public domain.
- [Djehuty](https://github.com/wilkie/djehuty), a fully-verifiable operating system written in the D programming language, is in the public domain.
- [XOS](http://openxos.org/), a multitasking operating system for the x86 architecture, is in the public domain.
- [snafu](http://home.swipnet.se/smaffy/snafu/), a small operating system written in assembly language, is in the public domain.
- [PDCLib](http://pdclib.rootdirectory.de/), a minimal C standard library implementation, is in the public domain.
- [PDPCLIB](http://pdos.sourceforge.net/), another C standard library implementation, is in the public domain.
- [PDOS](http://pdos.sourceforge.net/), a DOS-compatible operating system, is in the public domain.
- [SubC](http://www.t3x.org/subc/), a fast and simple compiler for a clean subset of the C programming language, is in the public domain.
- [WPDCC](http://www.cod5.org/archive/), a C preprocessor and compiler implementation, is in the public domain.
- [c11threads.h](https://github.com/jtsiomb/c11threads), a simple C11 threads implementation based on POSIX threads, is in the public domain.
- [mpkg](http://charon.persephoneslair.org/~andrea/software/mpkg/), a minimalist package manager for *nix systems, is in the public domain.

For other listings of public domain software, see [Whoow](http://www.whoow.org/public_domain/), [Wikipedia](http://en.wikipedia.org/wiki/Category:Public_domain_software), [SourceForge](https://sourceforge.net/softwaremap/?&fq%5B%5D=trove%3A197), [Freecode](https://freecode.com/tags/public-domain), [Ohloh](http://www.ohloh.net/p?sort=users&q=license%3APublic+Domain), [Google Code Hosting](http://code.google.com/hosting/search?q=%22public+domain%22), [Alioth](http://alioth.debian.org/softwaremap/trove_list.php?form_cat=197), [Savannah](http://www.google.com/search?q=site%3Asavannah.nongnu.org+%22public+domain%22), [Launchpad](https://launchpad.net/projects/+index?text=%22public+domain%22), [CodePlex](http://www.codeplex.com/site/search?projectSearchText=%22public%20domain%22), [RubyForge](http://rubyforge.org/softwaremap/trove_list.php?form_cat=197) and the [Python Cheeseshop](http://pypi.python.org/pypi?:action=browse&c=91).

## Other Popular Unlicenses

Some other ways to set your code free:

- [BOLA - Buena Onda License Agreement](http://blitiri.com.ar/p/bola/) is similar to the Unlicense in intent.
- [CC0 - Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/) is not intended for software per se.
- [WTFPL - Do What The Fuck You Want To Public License](http://sam.zoy.org/wtfpl/) can't be beat for blunt directness.

## Unlicensing Resources

If setting your code entirely free still seems a somewhat daunting prospect, try these perspectives on for size:

- [Who's Afraid of the Public Domain?](http://stpeter.im/writings/essays/publicdomain.html)
- [The Surprising History of Copyright and The Promise of a Post-Copyright World](http://questioncopyright.org/promise)
- [What is Copyright?](https://stpeter.im/writings/essays/whatiscopyright.html)
- [Placing Documents into the Public Domain](http://cr.yp.to/publicdomain.html)
- [The Unlicense: The First Year in Review](http://ar.to/2011/01/unlicense-1st-year)
- [Licensed, License-Free, and Unlicensed Code](http://ar.to/2010/12/licensing-and-unlicensing)
- [Set Your Code Free](http://ar.to/2010/01/set-your-code-free)
- [Dissecting the Unlicense: Software Freedom in Four Clauses and a Link](http://ar.to/2010/01/dissecting-the-unlicense)
- [Why I'm Going Public](http://zacharyvoase.com/2010/01/04/unlicense/)
- [I Just Unlicensed My Software](http://mikegagnon.com/2013/09/30/i-just-unlicensed-my-software/)
- [The Promising Future of the Unlicense](http://bhuga.net/2010/01/promising-future-unlicense)
- [To License or to Unlicense?](http://blog.verbose.nl/post/3680501466/to-license-or-to-unlicense)
- [Language Matters: Framing The Copyright Monopoly So We Can Keep Our Liberties](http://torrentfreak.com/language-matters-framing-the-copyright-monopoly-so-we-can-keep-our-liberties-130714/)

Find and follow us on
<a href="https://twitter.com/theunlicense">Twitter</a>,
<a href="https://www.facebook.com/TheUnlicense">Facebook</a>,
<a href="http://www.reddit.com/r/unlicense/">Reddit</a>, and
<a href="http://unlicense.tumblr.com">Tumblr</a>.

[anti-copyright]:     http://en.wikipedia.org/wiki/Anti-copyright
[Google Search]:      http://www.google.com/search?q=%22This+is+free+and+unencumbered+software+released+into+the+public+domain%22&filter=0
[GitHub]:             https://github.com/search?q=license%3Aunlicense
[Bitbucket]:          http://www.google.com/search?q=%22This+is+free+and+unencumbered+software+released+into+the+public+domain%22+site%3Abitbucket.org&filter=0
