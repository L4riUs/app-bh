import { YStack } from "tamagui";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from "@state/themeContext";

// Configuración opcional para español
LocaleConfig.locales['es'] = {
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'],
  today: "Hoy"
};
LocaleConfig.defaultLocale = 'es';

export default function CalendarCustom() {
    const { theme } = useTheme();

    const commonTheme = {
        selectedDayBackgroundColor: '#FF6900',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#FF6900',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 14,
        'stylesheet.calendar.header': {
            week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }
        }
    };

    const darkCalendarTheme = {
        ...commonTheme,
        backgroundColor: '#2D2D2D',
        calendarBackground: '#2D2D2D',
        textSectionTitleColor: '#B0B0B0',
        dayTextColor: '#ffffff',
        textDisabledColor: '#666666',
        arrowColor: 'white',
        monthTextColor: 'white',
    };

    const lightCalendarTheme = {
        ...commonTheme,
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#2d4150',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        arrowColor: 'black',
        monthTextColor: 'black',
    };

    const calendarTheme = theme === 'dark' ? darkCalendarTheme : lightCalendarTheme;

    return (
        <YStack
            backgroundColor={theme === "dark" ? "$black4" : "$white3"}
            borderRadius="$10"
            paddingVertical="$4"
            shadowColor="black"
            shadowOpacity={0.2}
            shadowRadius={5}
        >
            <Calendar
                hideExtraDays={true}
                firstDay={1}
                monthFormat={'MMMM yyyy'}
                theme={calendarTheme}
                style={{
                    borderWidth: 0,
                    borderColor: 'gray',
                    height: 350,
                    borderRadius: 16,
                    overflow: 'hidden'
                }}
            />
        </YStack>
    );
}
