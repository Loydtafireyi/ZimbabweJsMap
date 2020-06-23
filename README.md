#Zimbambwe Interactive Html, SVG & JS Map

# Can be used for data visualization

- To postion the data card change the ``info_panel top: mouseY -50 -100 -120 -150 -200``
- Select each province using the ``<g id="">`` inside the svg
- To style the provinces independently you grab the svg -g 

# Currently map color detail depend on the number of infections
- You can change the behaviour by altering the ``.css({'fill': 'rgb(255,0,0, 0' + regions[i].infected/highest_value +')'})``
