package com.checkwriter.app.controllers;

import com.checkwriter.app.dto.CompanyDto;
import com.checkwriter.app.services.CompanyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/companies")
public class CompanyController {
    private CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    public ResponseEntity<List<CompanyDto>> getCompanies() {
        List<CompanyDto> companyDtos = companyService.getAllCompanies();
        return ResponseEntity.ok(companyDtos);
    }
}
