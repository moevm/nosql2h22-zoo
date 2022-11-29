from enum import Enum


class EntityTypes(Enum):
    ticket = 0
    timetable = 1
    employee = 2
    animal = 3
    schedule = 4


class EmployeeTypes(Enum):
    id = 0
    username = 1
    position = 2
    password = 3


class TicketTypes(Enum):
    id = 0
    date = 1
    username = 2
    price = 3


class TimetableTypes(Enum):
    id = 0
    day = 1
    time_from = 2
    time_to = 3


class AnimalTypes(Enum):
    id = 0
    name = 1
    kind = 2
    gender = 3
    aviary = 4


class ScheduleTypes(Enum):
    id = 0
    id_employee = 1
    id_timetable = 2
    id_animal = 3


dict_types = {
    EntityTypes.ticket.name: TicketTypes,
    EntityTypes.employee.name: EmployeeTypes,
    EntityTypes.animal.name: AnimalTypes,
    EntityTypes.timetable.name: TimetableTypes,
    EntityTypes.schedule.name: ScheduleTypes
}
