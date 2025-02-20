package com.checkwriter.app.services.impl;

import com.checkwriter.app.dto.CompanyDto;
import com.checkwriter.app.model.Company;
import com.checkwriter.app.repository.CompanyRepository;
import com.checkwriter.app.services.CompanyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {
    private CompanyRepository companyRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    public List<CompanyDto> getAllCompanies() {
        List<Company> companies = companyRepository.findAll();
        return companies.stream()
                .map(company -> new CompanyDto(company.getId(), company.getName()))
                .toList();
    }
}
