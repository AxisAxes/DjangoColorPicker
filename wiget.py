class ColorPickerInput(forms.TextInput):
    def __init__(self, attrs=None):
        class_attrs = { 'type':'color', 'class':'color-picker-style' }
        if attrs is not None:
            class_attrs.update(attrs)
        super().__init__(class_attrs)
        self.template_name = 'components/color_picker_input.html'
        
