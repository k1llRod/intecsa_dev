from odoo import models, fields, api, _

class ResPartner(models.Model):
    _inherit ='res.partner'

    def assign_client(self):
        return True