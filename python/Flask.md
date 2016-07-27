Flask

Jinja Templates


from flask import render_template

return render_template("index.html", months=months, weather=weather)

Render Template takes any number of arguments after the template name

Jinja2 Templates


{% for month in months%}
  <td>{{Month}}</td>

{% endfor%}


@app.before_request
def before_request():
