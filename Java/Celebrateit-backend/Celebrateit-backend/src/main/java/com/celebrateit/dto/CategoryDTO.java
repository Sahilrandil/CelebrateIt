package com.celebrateit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CategoryDTO {
    private Integer categorieid;
    private String categoryname;
    private String parentcategory;  // Enum as String
}
