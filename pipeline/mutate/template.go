package mutate

import (
	"fmt"
	"text/template"

	"github.com/Masterminds/sprig"
)

func newTemplate(id string) *template.Template {
	return template.New(id).
		// Implies that zero value will be used if a key is missing.
		Option("missingkey=zero").
		Funcs(template.FuncMap{
			"print": func(i interface{}) string {
				if i == nil {
					return ""
				}
				return fmt.Sprintf("%v", i)
			},
		}).
		Funcs(sprig.TxtFuncMap())
}
