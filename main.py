db = 0

def on_forever():
    global db
    db = smarthome.read_noise(AnalogPin.P2)
    OLED.init(128, 64)
    OLED.write_string_new_line("DB")
    OLED.write_num_new_line(db)
    if db > 70:
        servos.P1.set_angle(90)
    if db < 70:
        servos.P1.set_angle(0)
basic.forever(on_forever)
