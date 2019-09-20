# DotArt

This is a simple browser-based program for converting images (PNG, JPEG, GIF) into text-based equivalents using Unicode's printable braille characters. The braille characters can then be used as a neat effect in chat programs (such as Discord), message board posts, or elsewhere where a proper image file is either not permitted or one simply wants the unique look and feel provided by the braille characters.

As this involves converting a color-based image into a 1-bit black-and-white one, options are provided for adjusting the threshold and even enabling dithering so you can non-destructively tune away at the settings until a desired image is achieved.

Some examples:

```
⣿⣾⣿⣾⣿⣾⣿⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣿⣾⣿⣾⣿
⣿⣾⣿⣾⣿⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻⣾⣻⣾⣿⣾⣿
⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻⣾⣻⣾⣿
⣻⣾⣻⣾⣻⣾⣻⣾⣻⣾⣺⣾⣺⣾⣺⣾⣻⣾⣺⣾⣺⣾⣺⣪⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻⣾⣿
⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣺⣾⣺⣾⣺⣺⡊⡀⣺⣺⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣿⣾⣿
⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣺⣾⣺⣺⣺⣺⡂⡪⠺⣺⣺⣺⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻
⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣺⣾⣺⣺⣺⡢⠊⡨⡊⡂⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻
⣺⣾⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣺⣾⣺⣺⣺⡀⡂⠀⠂⡀⡺⣪⣺⣪⣺⣺⣺⣺⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻
⣺⣺⣺⣺⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣻⣾⣺⣺⣺⣪⣺⡂⡂⡀⡂⡠⡺⣪⣺⣪⣺⣪⣺⣪⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻
⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣾⣺⣾⣺⣺⣺⣪⡺⡀⡂⡀⡂⡠⡪⣪⡺⣪⣺⣪⣺⣪⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣺
⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣪⣺⣪⡺⣪⡊⡀⠀⠀⠀⠀⠀⡠⡺⣪⡺⣪⣺⣪⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺
⣺⣺⣺⣺⣺⣪⣺⣺⣺⣺⣺⣪⣺⣪⣺⣪⡺⣪⡺⣪⠂⠀⠀⡀⠀⠀⠀⠀⠪⣪⡺⣪⣺⣪⣺⣺⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣺⣺
⣺⣺⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⡺⣪⡺⡪⡂⠀⠀⠀⠀⡀⠀⠠⠂⣪⡺⣪⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣺⣺
⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⡺⣪⡺⣪⡺⣪⡺⡂⠂⠀⠂⡠⡂⠀⠊⣪⣺⣪⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣺⣺
⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⡺⣪⡺⡪⣢⡢⡂⡢⡢⡢⡢⣢⡢⣢⡢⣢⡢⡈⣺⣺⣺⣺⣺⣺⣺⣾⣺⣾⣺⣾⣺⣺⣺⣺⣺
⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⡺⣪⡂⡪⡪⡂⡂⡢⣚⣢⣒⣢⡒⡂⡂⡢⡊⡢⡢⣪⣺⣪⣺⣺⣺⣺⣺⣾⣺⣾⣺⣺⣺⣺⣺
⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⡺⣪⡺⣪⡪⡊⡀⡀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠺⣪⣺⣺⣺⣪⣺⣺⣺⣺⣺⣺⣺⣾⣺⣾⣺
⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⡺⣪⡪⠀⠂⡪⡺⣪⡂⡀⠊⡢⡂⡢⡂⡠⠂⡀⠨⣪⣺⣺⣺⣺⣺⣪⣺⣺⣺⣺⣺⣾⣺⣾⣺
⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⡪⡀⡀⣪⣺⣪⣺⣢⣺⣢⣪⣪⣺⣢⣪⡂⠸⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣺⣺⣺⣺⣺⣺
⣺⣺⣺⣪⣺⣺⣺⣺⣺⣪⣺⣪⣺⣪⣺⣪⡺⡀⡪⣢⡂⡢⡂⡢⡪⡪⡪⡢⡪⡪⡪⡪⡊⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣺⣺
⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣪⣺⣪⣺⣪⣺⡂⡂⡢⡂⣢⡊⣂⣊⣺⣺⣢⡪⡪⡢⡢⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣺⣺
⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⡪⡊⡢⡢⡢⡪⡪⡪⣺⣪⡪⡊⡢⡊⡢⡊⣺⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺
⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⣺⡪⡂⡢⡢⡢⡂⡢⡢⣪⡺⡢⡢⡢⡂⡢⡊⡪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣺⣺⣺⣺
⣺⣺⣺⣺⣺⣾⣺⣺⣺⣺⣺⣺⣺⣺⣺⣲⡂⡢⡊⡢⡊⡠⡂⡂⡊⣪⡺⣪⡊⡢⡢⡢⡢⡪⡂⣪⣺⣪⣺⣪⣺⣪⣺⣪⣺⣺⣺⣺⣺
⣺⣾⣺⣾⣺⣾⣺⣺⣺⣾⣺⣾⣺⣾⣺⡪⡂⡢⡪⣪⡪⡠⡂⡂⡊⣺⡺⣪⡪⣢⡪⣢⡪⡢⠪⡢⣺⣪⣺⣪⣺⣺⣺⣺⣺⣺⣺⣺⣺
⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⡂⡪⡢⡢⡪⡊⡪⡂⡢⡂⣠⡢⡪⡪⣢⡺⡨⡊⡢⡪⡢⣢⣺⣺⣪⣺⣺⣺⣺⣺⣺⣺⣺⣺
⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⡢⡢⡢⡂⡺⡂⡪⡊⡢⡊⡢⡪⡪⡪⡢⡺⣪⡊⡂⡺⡪⡂⣪⡪⣾⣺⣺⣺⣺⣺⣺⣺⣺⣺
⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣺⡪⡢⣨⡂⡢⡺⣂⣪⡢⠊⡢⡢⡢⡪⡪⡺⣂⡪⡢⡢⡢⡊⣪⡂⣪⡪⣢⣺⣺⣺⣾⣺⣺⣺⣺⣺
⣺⣾⣻⣾⣻⣾⣺⣾⣺⣾⣺⡾⡺⡢⡂⡢⡂⡢⡂⡊⡒⡢⡂⡢⡂⡠⡺⡂⡢⣢⡊⣢⡢⣨⡂⡢⣺⣢⡺⣪⡊⡺⣺⣺⣺⣾⣺⣺⣺
⣻⣾⣻⣾⣻⣾⣻⣾⣺⣾⡫⣪⠺⣢⡺⡂⡊⡢⡊⡂⣪⣪⡊⡊⠊⡂⡂⡢⡺⣢⡢⣢⡊⡠⡊⡂⡂⡢⡺⣪⠂⣢⣪⣺⣺⣺⣺⣾⣺
⣻⣾⣻⣾⣻⣾⣻⣾⣻⣢⡂⣺⡂⡂⠊⣢⠀⡂⡂⡀⢂⡂⡊⡀⡀⡠⡂⡀⡈⡀⡂⡨⡊⣊⡂⡪⡊⡂⡊⡂⡺⣪⡂⣺⡊⣾⣺⣺⣺
⣻⣾⣻⣾⣻⣾⣻⣾⣺⣪⣺⡂⡂⡢⡺⣢⡨⣢⡺⡀⡊⡪⡂⡀⡂⡀⡪⡪⡺⡂⡪⡪⡂⡢⡪⡪⣺⣮⡊⡢⡺⣪⣺⡈⣺⣺⣺⣾⣺
⣻⣾⣻⣾⣻⣾⡻⣮⡲⣢⡂⣢⡲⣂⡂⡢⠂⡂⡢⡀⡐⡢⡲⡂⠂⣢⠂⣢⡊⣢⡺⡪⣢⡢⡪⣂⡂⡢⡂⡚⣺⡪⡊⣪⡚⣢⡺⡊⡊
⣻⣾⣻⣾⡫⡪⣺⣺⣺⣪⡺⡠⠊⡠⡂⡢⡺⡀⡂⡢⡲⡀⠂⡀⠂⡂⠚⣪⡚⡊⡂⡈⣂⡊⡚⣢⠂⡀⡚⡢⡂⡂⡪⡪⡪⣺⡂⣪⣢
⣻⣾⡻⣲⣫⣾⣻⣢⡊⡺⣢⣪⣺⡂⡢⣠⠊⡢⣊⣪⣪⡊⡪⡀⡂⡀⠺⡢⠊⡢⣢⡂⣺⣠⡊⡪⡊⡂⡊⡪⡊⡪⡺⡢⡊⡊⣢⡂⡚
⡻⣪⣻⣾⡚⡀⣂⡢⡪⣢⡊⣦⡪⣢⡪⡢⡂⡢⡢⡂⠚⣢⡺⡀⡲⡀⡪⡪⡪⣠⠂⡊⡚⡢⡊⡂⡢⡊⡺⡪⣪⣾⡪⣺⡺⣪⡺⣺⣪
⣺⡪⣪⣢⣺⣾⡪⣺⡂⡢⣺⡪⣲⡂⡺⡺⡪⡂⡂⣠⡂⣢⣢⡀⠀⡀⠺⡈⡪⣪⡂⡢⡢⣠⡂⡪⡢⡢⡊⣢⡚⣪⣺⣺⡪⣾⡊⣺⣺
⡻⣾⣺⣾⡻⡾⡺⡾⡺⡢⡺⡢⠺⣾⡺⡢⡺⡢⣚⣲⡺⡪⣺⡪⣺⣪⡺⡺⡺⡺⡺⡪⣺⡪⠪⡪⠊⡊⡊⡈⡊⡀⡊⡺⡚⡂⡂⡂⠂
```

Tokyo Tower at night ([original](https://www.flickr.com/photos/nknh/452345990/in/photolist-FYoGN-mPj5MR-5wmNmD-p9eACs-8VDmsr-ox32k7-fhgz7o-7U9dMv-7hKgvE-27EYZ8h-7hFiJZ-8hQUqE-6ShWFF-7hFhor-5RteRm-6XEwkF-8fmbYZ-4ZAJ8j-ox3bgH-mPkPWf-pmmwvi-fNpMw3-mPj7Ut-bnrNfe-5heDhk-mPj6sF-6c1K2H-8ja5ap-8U7xn5-EjS5W9-8npmhv-o7ivtU-a23eeY-LxLbS-7U9dQ2-7hFg6i-26wzaSr-4Z7dVk-e19gVS-54QBnm-nPCUJs-afvnm-QNrFQQ-7hFiin-63ZvV4-7hFhbe-LxLbQ-m4xFg-5vQb5R-7hKcRG)), black on white mode, dithering off

```
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣻⣺⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣪⣺⣪⣺⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣪⣺⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣮⡺⣪⣺⣾⡂⠀⣀⣠⣲⣺⣻⣾⣺⣦⣀⡀⠀⠀⠀⠀⠀⠀⠀⢸⣺⣾⣻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡺⣪⣺⣪⣺⣺⣺⣺⣺⣪⣺⣾⣾⣺⣺⣺⣺⣾⣻⣾⡀⠀⠀⠀⠀⣸⡺⣺⣻⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡺⣪⣺⣪⣺⡾⠚⣪⡺⣪⣺⣪⡺⣺⣺⣺⣺⣺⣻⣾⣻⣺⡺⣪⡺⣪⣺⣺⣻⣾⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣪⡺⡮⠀⡀⣺⣪⡊⠀⠀⡠⣺⣪⣺⣺⣺⣺⣺⣺⣺⣪⣺⣪⣺⣺⣺⣾⣻⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣮⡂⠀⠀⡀⡺⠂⠀⡀⠀⡀⡪⣮⡺⣪⣺⣺⣺⣺⣺⣺⣺⣾⣻⣾⣻⣾⣻⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡊⡎⣺⡂⣪⣢⢲⡀⡀⠀⡀⡪⣮⡺⣪⣺⣺⣺⣾⣻⣾⣻⣾⣻⣾⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡻⣾⣿⣾⣣⣺⣿⣾⣿⡀⠀⡀⡪⣮⡺⣪⣺⣺⣺⣾⣻⣾⣿⣾⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣪⡺⣪⣺⣪⣺⣺⣿⣾⣿⡀⠀⡠⣺⣪⡺⣪⣺⣺⣺⣾⣻⣾⣿⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⡲⣀⠀⠀⠀⡺⣪⡺⣪⡺⣪⡺⣺⣺⣾⡀⣀⣢⣾⣺⣪⣺⣪⣺⣺⣺⣾⣻⣾⣿⡮⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⡀⡊⠀⡪⣪⣺⣪⣺⣮⣺⣾⣺⣪⡺⣪⡺⣪⡺⣪⡺⣺⣺⣺⣺⣾⣻⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡀⡊⣈⠀⠀⠠⡸⠀⠪⣺⣪⣻⣪⣺⣪⣺⣪⡺⣪⣺⣪⣺⣺⣺⣺⣺⣾⣻⣾⣿⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⡀⠀⠀⠀⠈⠀⠲⡂⡐⡀⣠⠀⠀⠀⠀⠈⢺⣺⣪⣺⣪⣺⣾⣺⣺⣺⣪⣺⣺⣺⣾⣻⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢂⡀⡢⡀⣀⡤⡁⡀⡂⡀⠢⣪⡺⣪⣺⡀⠀⠈⠺⣪⣺⣪⣺⣾⣺⣺⣺⣺⣻⣾⡻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠂⠂⠊⠀⠀⠀⠈⣦⣮⣺⣺⣺⠂⠀⠀⠀⣪⡺⣪⡺⣪⡺⣪⡺⣪⣺⣾⣻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣮⡺⣪⡺⣺⣻⣺⣺⣾⣺⣮⣺⣪⣺⣪⣺⣪⡺⣪⣺⣾⣻⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠺⣾⣺⣺⣺⣺⣺⣾⡺⣪⡺⣪⡺⣺⣺⣺⣺⣪⣺⣾⣻⣾⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠊⣿⣺⣺⣪⡺⣪⡺⣪⣺⣪⣺⣺⣺⣾⣺⣾⣻⣾⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣺⣪⣺⣪⣺⣪⣺⣺⣺⣾⣺⣾⣻⣾⣻⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣺⣺⣺⣾⣺⣾⣺⣺⣺⣾⣻⣾⣻⣾⣻⣮⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡺⣪⡺⣪⣻⣾⣻⣾⣺⣺⡊⡢⡊⣾⣺⣾⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣪⡺⣪⣺⣪⣺⣺⣺⣺⣺⣾⣻⡢⣢⣾⣻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣺⣺⣾⣺⣾⣺⣾⣺⣾⣺⣾⣻⣾⣻⣾⣻⣾⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡊⡪⡪⣪⣺⣪⡪⣪⡺⡪⣺⣺⣺⠺⣿⣾⣺⣾⣺⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣠⣠⣲⡶⡲⡺⡊⡊⡺⣢⣪⣾⣲⣢⣊⡪⡺⣪⡪⣪⣻⣦⠀⠀⠈⠺⣺⣾⣺⣾⣺⣾⣲⣦⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡠⡊⡀⠀⡀⠀⡀⠀⡪⡺⡊⠀⠀⠀⠀⡪⣺⡪⣪⡪⣪⡪⣪⡪⣪⣺⣺⣺⣺⡀⠀⠀⠀⠀⠀⠀⠀⠈⠚⠻⡾⣺⣾⣺⣺⣺⣺⣻⣶⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠠⡂⠀⠀⡀⠀⡢⣺⡠⡂⡀⠀⠀⠀⠀⡂⡢⣺⣪⣪⣪⣺⣺⣺⣾⣺⣪⣺⣪⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣺⣺⣾⡆⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠢⡂⡀⠀⡀⠀⡀⠊⣪⡺⣪⣺⣪⣺⣪⣺⠾⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣺⣪⣺⡀⠀⡀⣠⣾⣺⣾⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣺⣪⣺⣪⣺⣪⣺⣾⣺⡾⠿⠊⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠈⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
```

BSD Daemon ([original](https://www.digitaldaemon.com/Daemon_Images.html)), black on white mode, dithering on

DotArt uses no server-side components. Simply open the index.html file in a modern web browser and go to town.

The project is still in early development and is still a bit ugly. Please report any bugs you find - right now the program does practically zero error checking.

2-clause BSD licensed.
